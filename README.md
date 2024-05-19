# WAD2 Assignment

# Overview

In this project, a microservice architecture was developed for a containerised application environment. The IWTSC container was deconstructed into three separate containers, specifically for the React app, its API, and the PostgreSQL database.
Additionally, a MongoDB database was introduced to handle the migration and delivery of questions to the app. The project also includes the integration of the alevelcomputing site into IWTSC by using an iFrame.

# Implementations

## Microservices separation

In order to deconstruct the IWTSC application into three separate containers, Dockerfiles were created: one for the frontend, and one for the server and PostegreSQL database. Also, a 'docker-compose.yml' file was created to manage these services. This file configured each container and defined how they interact with each other. After creating the Dockerfiles and 'docker-compose.yml', the commands 'docker-compose build' and 'docker-compose up' were executed to build and run the containers to test the application. The three containers operated seamlessly.

## MongoDB migration

To migrate questions from PostgreSQL to MongoDB first MongoDB was installed. Once MongoDB was set up, a Mongoose model was created for the questions to be stored in MongoDB and then a migration script, 'migrateQuestions.js', was created to transfer the existing questions from PostgreSQL to MongoDB. The script connected to both databases, fetched the questions from PostgreSQL, and then inserted them into MongoDB. After creating the script, it was executed within the Docker environment by using the 'command docker-compose run server node migrateQuestions.js'. Also, it was necessary to updated the backend API. The 'activity.controller.js' was modified to use Mongoose for fetching questions.

## Alevelcomputing integration

In the Frontend a new component, 'ALevelQuestion.js', was created to integrate the alevelcomputing site. The site is running independently on port 4000 and it can also be accessed from IWTSC. In the component an iFrame was added connected to port 4000.

# Conclusion

The monolithic application was successfully transformed into a microservice architecture using Docker. Also, the migration of questions from PostgreSQL to MongoDB was implemented successfully. The integration of the alevelcomputing site was also completed effectively. However, there is still a missing feature: a mechanism to record if a question has been answered correctly. A way to implement this feature might be to pass parameters to the 'alevelcomputing' site and handle the response for correct answers.
