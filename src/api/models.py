from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile_pic = db.Column(db.String(120), unique=False, nullable=False)
    location = db.Column(db.Integer, primary_key=True)
    gender = db.Column(db.String(120), unique=True, nullable=False)
    interests = db.Column(db.String(120), unique=True, nullable=False)
    sexual_interests = db.Column(db.String(120), unique=True, nullable=False)
    is_online = db.Column(db.Boolean(), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, unique=False, nullable=False)
    current_plan = db.Column(db.String(120), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Attendee(db.Model):
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), primary_key=False)

