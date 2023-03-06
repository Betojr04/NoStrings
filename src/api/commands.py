import click
from api.models import db, User

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    # @click.argument("count") # argument of out command
    def insert_test_data():
        print("Creating test users")
        coordinates = [("Jane", 25.749809, -80.205849), ( "Jim", 25.891762, -80.126991),("Jordan", 25.749809, -80.205849), ("Laura", 25.87574236814734, -80.20135529044997), ("Lisa", 25.900598439487815,80.24567187168712)("Michael", 25.891762, -80.126991) ]
        for i in range(len(coordinates)):
            user = User()
            user.full_name = coordinates[i][0]
            user.latitude = coordinates[i][1]
            user.longitude = coordinates[i][2]
            user.email = coordinates[i][0] + "@example.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed