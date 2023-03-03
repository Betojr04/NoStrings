"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Messages
from api.utils import generate_sitemap, APIException
import hashlib
from datetime import datetime
import random
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

# from app import socketio

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# added the routes for created account-mich 


@api.route('/createaccount', methods=['POST'])
def create_account():
    body = request.get_json(force = True)
    email = body['email']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    has_email = User.query.filter_by(email = email).first()
    if has_email is None:
        new_user = User(email = email, password = password, is_active = True, created_at = datetime.now())
        db.session.add(new_user)
        db.session.commit()
        return jsonify('Successfully Created Account')
    else:
        raise APIException('User already Exists')

@api.route('/login', methods=['POST'])
def Login():
    body = request.get_json(force = True)
    email = body['email']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        raise APIException('Invalid Credentials')
    access_token = create_access_token(identity = email)
    return jsonify(access_token = access_token)
   

@api.route('/anon-login', methods=['GET'])
def anon_login():
    randnum = random.randint(0,9999999)
   
    access_token = create_access_token(identity = randnum)
    return jsonify(access_token = access_token)
    
    


@api.route('/user/data', methods=['PUT'])
@jwt_required()
def validate_identity():
    current_user = get_jwt_identity()
    body = request.get_json(force = True)
    user = User.query.filter_by(email = current_user).first()
    if "gender" in body and body['gender'] is not None:
        user.gender = body['gender']
        db.session.commit()
    if "age" in body and body['age'] is not None:
        user.age = body['age']  
        db.session.commit()
    if "profilepic" in body and body['profilepic'] is not None:
        user.profile_pic = body['profilepic']
        db.session.commit()
    if "location" in body and body['location'] is not None:
        user.location = body['location']
        db.session.commit()
    if "interests" in body and body['intersts'] is not None:
        user.interests = body['intersts']
        db.session.commit()
    if "sexualinterests" in body and body['sexual_interests'] is not None:
        user.sexual_interests = body['sexual_interests']
        db.session.commit()
    if "isonline" in body and body['isonline'] is not None:
        user.is_online = body['isonline']
        db.session.commit()
    if "currentplan" in body and body['currentplan'] is not None:
        user.current_plan = body['currentplan']
        db.session.commit()
    return jsonify("You have successfully updated your profile")         

@api.route('/chat', methods=['POST'])
@jwt_required()
def send_Message():
    request_body=request.get_json(force=True)
    email = get_jwt_identity()
    user = User.query.filter_by(email=email).first()
    print(email)
    print(user)
    if user:
        message = request_body.get("message")
        sender_id = user.id
        receiver_id = request_body.get("receiver_id")
        created_at = datetime.now()
        new_message = Messages(message=message, sender_id= sender_id, receiver_id = receiver_id, created_at = created_at)
        db.session.add(new_message)
        db.session.commit()
        return jsonify('message sent'),200
    return jsonify('user not found'), 400


@api.route('/all-users', methods=['GET'])
def get_Users():
    users = User.query.all()
    serialized_users =[]
    for user in users:
        serialized_user = user.serialize()
        serialized_users.append(serialized_user) 
    male_users = []
    for user in serialized_users:
        if user["gender"] == "male":
            male_users.append(user)
    female_users = []
    for user in serialized_users:
        if user["gender"] == "female":
            female_users.append(user)
    payload= {
            "male_users": male_users,
            "female_users":female_users,
        }
    return jsonify(payload), 200
    #   serve all the users, this will get the lcoation, and get them on the chats n shit
    #

@api.route('/current-location', methods=['PUT'])
@jwt_required()
def update_Location():
    location = request.get_json("location", None)
    user = User.query.filter_by(email=get_jwt_identity).first()
    user["location"]= location
    db.session.commit()
    return True ,200


