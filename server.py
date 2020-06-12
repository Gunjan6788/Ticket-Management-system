from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Eshwer@12'
app.config['MYSQL_DB'] = 'ticket_management'

mysql = MySQL(app)

@app.route('/')
def home():
    return 'home'
    