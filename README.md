# GeoLocatorApp

The frontend for this project project was generated with **Angular CLI** version 17.1.0
and the backend was built using **Java Spring Boot** version 3.2.1 with JDK 17.

## How to install and run

- before start, you should have installed (**node.js** recommeneded version 20.11.0, **JDK** version 17, **Xampp** or any other mysql server)
- clone the repo to your machine
- first of all, you should import the database (geo_locator_db.sql) to your mysql server like **phpmyadmin** 
- then, you should run the server by open cmd in the project production folder and type `java -jar server.jar`
- and finally, run the front end by open the cmd in the frontend folder and type `ng serve --open`

## Notes

- if you changed the database name after importing it then you should change its name also inside the backend folder by going to "src/main/resources/application.properties" and change the last part of the url `spring.datasource.url` (after last forward slash '/') and write your new db name, and then make a clean build and run cmd in the folder root and generate a new jar by typing `mvn clean package`
- backend jar can be found at /target/?.jar
- if you change the port of the frontend angular app then you should also change it inside the ApiController/@CrossOrigin class inside the backend source.
- replace the email.account.user and email.account.password inside the backend config file "src/main/resources/application.properties" to match your gmail account and gmail app password which could be generated from your email dashboard.