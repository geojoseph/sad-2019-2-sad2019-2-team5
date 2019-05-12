# sad-2019-2-sad2019-2-team5
sad-2019-2-sad2019-2-team5 created by GitHub Classroom

Team :
Geo Joseph (11011939),  
Kushal Pulluri(11011787),   
Praveen Kumar Appari(11012160),   
Sreehari Mullapulli(11011996)   

# Certify :-
This application enables the users a centralized place to store, share and get verified from our website .

## Feautures of the application:-
- Single Page Application and Responsive
- Secure Login/Logout
- Reset Password option is available
- View the details of certificates
- Search for the certificates

## Technology Used :-
- Vue.js as framework and front-end
- Node.js for the back-end
- Mysql for the database management
-------------------------------------------------------> Updates after presentation
-Axios Middleware


## How to run the project in docker
1. Update the contents of config.js file in server-certify folder
   password:'passowrd'
   host: 'mysqldb'
   
2. build server-certify image using the ServerDockerFile
docker build -t server-certify -f ServerDockerFile .

3. build client image
docker build -t client -f ClientDockerFile .

4. spin up a mysql container
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD="password" -e MYSQL_DATABASE="certify" -d mysql

5. Acces the mysqldb and update mysql properties because of some issues 
docker exec -it mysqldb mysql -u root -p

6. Input password = 'passowrd'

7. Input following command in mysql CMD
ALTER USER root IDENTIFIED WITH mysql_native_password BY 'password';

8. Make the server container
docker run --name server --link mysqldb:mysqldb -p 8081:8081 -d server-certify  
