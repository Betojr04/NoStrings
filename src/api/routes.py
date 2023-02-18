"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import hashlib
from datetime import datetime

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

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
        return jsonify('User already Exists')

@api.route('/Login', methods=['POST'])
def Login():
    body = request.get_json(force = True)
    email = body['email']
    password = hashlib.sha256(body['password'].encode("utf-8")).hexdigest()
    has_user = User.query.filter_by(email = email, password = password).first()
    if has_user is not None:
        access_token = create_access_token(identity = email)
        return jsonify(access_token = access_token)
    else: 
        return jsonify("Email or Password is Invalid")



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