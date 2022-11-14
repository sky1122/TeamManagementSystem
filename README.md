# take-home-assignment

# Full-stack take-home assignment
This project is a project for signal user's team management.

# Tools:
Backend: Django 4.1.3

Frontend: React, Taiwindcss, daisyUI, axios, react-router-dom

DataBase: Amazon RDS for MySQL

# How to run the project:
1. Using the **ip address and password in the email** login server on Visual Studio Code
2. cd /root/APIProject
```
cd /root/APIProject
```
3. run backend project
```
python3 manage.py runserver
```
4. go to frontend file
```
cd /root/APIProject/frontend
```
5. run react
```
npm start
```
# backend api explaination
### 1. Get all team 
```
GET http://127.0.0.1:8000/api/team
```
### 2. Add a new team member
```
GET http://127.0.0.1:8000/api/member
```
### 3. Update a team member
```
  # http://127.0.0.1:8000/api/member/member_id
PUT http://127.0.0.1:8000/api/member/25

request body:
{
    "team": 1,
    "first_name": "update",
    "last_name": "test",
    "email": "adsfa@aa.com",
    "phone": "3451347456",
    "role": "0"
}
```
### 4. Delete a team member
```
    # http://127.0.0.1:8000/api/member/member_id
DELET http://127.0.0.1:8000/api/member/25 
```
# frontend explaination
### Home Page
There is a nav bar on the top, in the left side, when you click **Team Managment**, it takes you to the **home page**.

in the right side, when you click **Get Start**, it takes you to the **Team page**.
```
http://localhost:3000/
```
## Team Page
In this page, the website display all teams. When you click a **team card**, it takes you to **Team Member Page**.
```
http://localhost:3000/Team
```
## Team Member Page
In this page, the website display all members in the team and the number of member in the team. 

You can also add a new member, update a member and delete a member.
```
# http://localhost:3000/Team/team_id
  http://localhost:3000/Team/8
```
