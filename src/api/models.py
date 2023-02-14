from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    profile_pic = db.Column(db.String(120), unique=False, nullable=True)
    location = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(120), unique=True, nullable=True)
    interests = db.Column(db.String(120), unique=True, nullable=True)
    sexual_interests = db.Column(db.String(120), unique=True, nullable=True)
    is_online = db.Column(db.Boolean(), unique=False, nullable=True)
    created_at = db.Column(db.DateTime, unique=False, nullable=True)
    current_plan = db.Column(db.String(120), unique=False, nullable=True)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_active": self.is_active,
            "profile_pic": self.profile_pic,
            "location":self.location,
            "gender":self.gender,
            "interests":self.interests,
            "sexual_interests":self.sexual_interests,
            "is_online":self.is_online,
            "created_at":self.created_at
            # do not serialize the password, its a security breach
        }

# class Attendee(db.Model):
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
#     group_id = db.Column(db.Integer, db.ForeignKey('group.id'), primary_key=False)

class Groups(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    profile_pic = db.Column(db.String(120), unique=False, nullable=True)
    groups_location = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(120), unique=True, nullable=True)
    interests = db.Column(db.String(120), unique=True, nullable=True)
    is_online = db.Column(db.Boolean(), unique=False, nullable=True)
    created_at = db.Column(db.DateTime, unique=False, nullable=True)
    groups_activity_type = db.Column(db.String(120), unique=False, nullable=True)
    groups_guidelines = db.Column(db.String(120), unique=False, nullable=True)
    
    def __repr__(self):
        return f'<Groups {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "is_active": self.is_active,
            "profile_pic": self.profile_pic,
            "groups_location":self.groups_location,
            "gender":self.gender,
            "interests":self.interests,
            "is_online":self.is_online,
            "created_at":self.created_at,
            "groups_activity_type":self.groups_activity_type,
            "groups_guidelines":self.groups_guidelines


            # do not serialize the password, its a security breach
        }