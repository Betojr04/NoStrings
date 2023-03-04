from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
db = SQLAlchemy()



# class Attendee(db.Model):
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
#     group_id = db.Column(db.Integer, db.ForeignKey('group.id'), primary_key=False)

# attendee= db.Table('attendee', 
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True),
#     group_id = db.Column(db.Integer, db.ForeignKey('groups.id'), primary_key=False)
# )
    

class User(db.Model):
    full_name = db.Column(db.String(255), nullable=True)
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    age = db.Column(db.Integer, unique=False, nullable=True)
    profile_pic = db.Column(db.String(120), unique=False, nullable=True)
    # I made the location column a foreign key to the location table instead of a primary key since there can only be one primary key- Beto
    latitude = db.Column(db.Float, unique=False, nullable=True)
    longitude = db.Column(db.Float, unique=False, nullable=True)
    gender = db.Column(db.String(120), unique=False, nullable=True)
    interests = db.Column(db.String(120), unique=False, nullable=True)
    sexual_interests = db.Column(db.String(120), unique=False, nullable=True)
    is_online = db.Column(db.Boolean(), unique=False, nullable=True)
    current_plan = db.Column(db.String(120), unique=False, nullable=True)
    groups = db.relationship('Groups', backref="user", lazy='dynamic')
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "profile_pic": self.profile_pic,
            "latitude":self.latitude,
            "longitude":self.longitude,
            "gender":self.gender,
            "interests":self.interests,
            "sexual_interests":self.sexual_interests,
            "is_online":self.is_online,
            "created_at":self.created_at,
            "groups":list(map(lambda x: x.name, self.groups))
            # do not serialize the password, its a security breach
        }


class Groups(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    profile_pic = db.Column(db.String(120), unique=False, nullable=True)
    # group location data type needs to be revised
    groups_longitude = db.Column(db.Float, unique=False, nullable=True)
    groups_latitude = db.Column(db.Float, unique=False, nullable=True)
    gender = db.Column(db.String(120), unique=False, nullable=True)
    interests = db.Column(db.String(120), unique=False, nullable=True)
    is_online = db.Column(db.Boolean(), unique=False, nullable=True)
    created_at = db.Column(db.DateTime, unique=False, nullable=True)
    groups_activity_type = db.Column(db.String(120), unique=False, nullable=True)
    groups_guidelines = db.Column(db.String(250), unique=False, nullable=True)
    admin_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    def __repr__(self):
        return f'<groups {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "is_active": self.is_active,
            "profile_pic": self.profile_pic,
            "groups_longitude":self.groups_longitude,
            "groups_latitude":self.groups_latitude,
            "gender":self.gender,
            "interests":self.interests,
            "is_online":self.is_online,
            "created_at":self.created_at,
            "groups_activity_type":self.groups_activity_type,
            "groups_guidelines":self.groups_guidelines

    

            # do not serialize the password, its a security breach
        }

class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message =db.Column(db.String(250), unique=False, nullable=False)
    sender_id =db.Column(db.Integer, db.ForeignKey('user.id'))
    receiver_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, unique=False, nullable=True)

    def __repr__(self):
        return f'<Messages {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "message": self.message,
            "sender_id": self.sender_id,
            "receiver_id": self.receiver_id,
            "created_at": self.created_at,
            "group_id": self.groups_guidelines

            # do not serialize the password, its a security breach
        }
    
class User_Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    payload =db.Column(db.String(250), unique=False, nullable=False)
    author_id =db.Column(db.Integer, db.ForeignKey('user.id'))
    receiver_id =db.Column(db.Integer,db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, unique=False, nullable=True)

    def __repr__(self):
        return f'<User_Review {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "payload":self.payload,
            "author_id":self.author_id,
            "receiver_id":self.receiver_id,
            "created_at":self.created_at,

            # do not serialize the password, its a security breach
        }
    
class Global_Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message =db.Column(db.String(250), unique=False, nullable=False)
    sender_id =db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, unique=False, nullable=True)

    def __repr__(self):
        return f'<Global_Messages {self.id}>'