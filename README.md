# Jira Clone Final Project Backend

Jira Clone:
This jira clone will help you create and manage tasks to streamline production on your next project.

## Non-user functionality:
    - Create Profile:
    - register as a new user
    - Login

## User functionality:
    - Login/Logout
    - Create tickets:
        - Add a description of the issue
        - Assign to a user
        - Pick a priority level
    - Update the status of a ticket:
        - Statuses:
            - Pending (When first created)
            - In progress (When the user assigned says they are working on it)
            - Done (When the user assigned says they are done)
            - Add update notes to tickets:
            - User assigned can add notes to the ticket for updates or status of progress on the issue
    - View All tickets
    - View personal information:
        - Page that displays users registered information (email, name, phone number)
    - Edit personal information:
        - Be able to change registered information (email, name, phone number)

## Admin functionality:
    - Everything a User can do
    - Delete tickets
    - Change who the ticket is assigned to
    - View all Users

## Backend Routes:
    - (GET) /tickets/all
        - Gets all the tickets
    - (GET) /tickets/one-ticket/:id
        - Gets a single ticket by id
    - (GET) /users/all
        - Gets all the users for the admin
    - (POST) /tickets/create-one
        - Creates the ticket
    - (POST) /users/login
        - A login for the user
    - (POST) /users/register
        - Registers the user
    - (PUT) /tickets/update-one/:id
        - Updates a ticket by id
    - (PUT) /users/update-one/:id
        - Updates the user info by id
    - (DELETE) /tickets/delete-one/:id
        - Deletes a ticket by id

## Packages
    - bcryptjs: ^2.4.3
    - cookie-parser: ~1.4.4
    - cors: ^2.8.5
    - debug: ~2.6.9
    - dotenv: ^16.0.3
    - ejs: ^3.1.9
    - express: ^4.18.2
    - http-errors: ~1.6.3
    - jade: ^0.29.0
    - jsonwebtoken: ^9.0.0
    - mongodb: ^5.0.1
    - mongoose: ^6.9.1
    - morgan: ~1.9.1
    - nodemon: ^2.0.20
    - uuidv4: ^6.2.13