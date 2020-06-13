from flask import Flask
from flask import request
from flask_mysqldb import MySQL
import json

app = Flask(__name__)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Eshwer@12'
app.config['MYSQL_DB'] = 'ticket_management'

mysql = MySQL(app)

@app.route('/')
def home():
    return 'home'

## user registration 
@app.route('/user_register', methods=['POST'])
def user_registration():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    gender = request.json['gender']
    email = request.json['email']
    dob = request.json['dob']
    username = request.json['username']
    password = request.json['password']
    
    dob = dob.split("-")
    dob = "%s-%s-%s"%(dob[2],dob[1],dob[0])
    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO user(first_name,last_name,gender,email,dob,username,password) VALUES("%s","%s","%s","%s","%s","%s","%s")''' %(first_name,last_name,gender,email,dob,username,password))
    mysql.connection.commit()
    cur.close()
    
    return json.dumps({"data":"User created successfully"})

## Company registration
@app.route('/company_register', methods=['POST'])
def company_registration():
    name = request.json['name']
    email = request.json['email']
    location = request.json['location']
    started_at = request.json['started_at']
    username = request.json['username']
    password = request.json['password']
    
    started_at = started_at.split("-")
    started_at = "%s-%s-%s"%(started_at[2],started_at[1],started_at[0])
    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO company(name,email,location,started_at,username,password) VALUES("%s","%s","%s","%s","%s","%s")''' %(name,email,location,started_at,username,password))
    mysql.connection.commit()
    cur.close()
    
    return json.dumps({"data":"Company data created successfully"})
    
@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']
    status = request.json['status']
   
    if status=='company':
        cur = mysql.connection.cursor()
        cur.execute('''''')
        mysql.connection.commit()
        cur.close()
    
    elif status=='user':
        
    


## test
@app.route('/test', methods=['POST'])
def test():
    dob = request.json['dob']
    
    return json.dumps(dob)