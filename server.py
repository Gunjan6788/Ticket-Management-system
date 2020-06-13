from flask import Flask
from flask import request
from flask_mysqldb import MySQL
import json
import jwt

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
    
    cur.close()
    
    return json.dumps({"data":"Company data created successfully"})

## login user or company #### 
@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']
    status = request.json['status']
    flag = False
    if status=='company':
        cur = mysql.connection.cursor()
        cur.execute('''SELECT * FROM company''')
        res = cur.fetchall()
        
        for row in res:
            if row[5]==username and row[6]==password:
                flag = True

        if flag == True:
            payload = {'username':username,"status":status}
            key = 'secret'
            encode_jwt = jwt.encode(payload,key)
            return {'auth_token': encode_jwt.decode(),'message':'logged_in','username':username,'status':status}
        else:
            return {'auth_Token':False,'message':'incorrect username or password'}

    elif status=='user':
        cur = mysql.connection.cursor()
        cur.execute('''SELECT * FROM user''')
        res = cur.fetchall()
        
        for row in res:
            if row[6]==username and row[7]==password:
                flag = True

        if flag == True:
            payload = {'username':username,"status":status}
            key = 'secret'
            encode_jwt = jwt.encode(payload,key)
            return {'auth_token': encode_jwt.decode(),'message':'logged_in','username':username,'status':status}
        else:
            return {'auth_Token':False,'message':'incorrect username or password'}
    
    return {'auth_Token':False,'message':'incorrect username or password'}

## add ticket ####
@app.route('/add_ticket', methods=['POST'])
def add_ticket():
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    gender = request.json['gender']
    email = request.json['email']
    
    dob = dob.split("-")
    dob = "%s-%s-%s"%(dob[2],dob[1],dob[0])
    cur = mysql.connection.cursor()
    cur.execute('''INSERT INTO user(first_name,last_name,gender,email,dob,username,password) VALUES("%s","%s","%s","%s","%s","%s","%s")''' %(first_name,last_name,gender,email,dob,username,password))
    mysql.connection.commit()
    cur.close()
    
    return json.dumps({"data":"User created successfully"})

## test
@app.route('/test', methods=['POST'])
def test():
    dob = request.json['dob']
    
    return json.dumps(dob)