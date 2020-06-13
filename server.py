from flask import Flask
from flask import request
from flask_mysqldb import MySQL
from flask-cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Eshwer@12'
app.config['MYSQL_DB'] = 'ticket_management'

mysql = MySQL(app)

@app.route('/')
def home():
    return 'home'

@app.route('/user_register', mathods=['POST'])
def user_registration():
    data = request.json['first_name']
    return json.dumps({'data':data})