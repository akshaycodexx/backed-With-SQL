# BAkend with SQL

This is a basic backend project using Node.js, Express, MySQL, and Faker for generating random user data. The project demonstrates CRUD operations in a user database with routes for viewing, creating, updating, and deleting users.

## Watch the Project Tutorial

Click the image below to watch a video tutorial on YouTube that demonstrates the setup and features of this project.

[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## Project Setup

### Requirements

- Node.js
- MySQL
- Faker.js (for generating random data)
- UUID (for unique user IDs)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd BAkend-with-sql
Install dependencies:

bash
Copy code
npm install
Set up your MySQL database:

Ensure MySQL is running.

Create a new database:

sql
Copy code
CREATE DATABASE delta_app;
Use the following SQL command to create a user table:

sql
Copy code
CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);
Update MySQL connection settings in the code:

In app.js, configure your mysql.createConnection with the correct MySQL host, user, database, and password.

Running the Project
To start the server:

bash
Copy code
node app.js
The server will start on http://localhost:8002.

Project Structure
app.js: Main application file, setting up the Express server, routes, and database connection.
views/: Contains the EJS templates for rendering HTML pages.
public/: Static files (CSS, JavaScript).
faker.js: Generates random data for populating the database (optional).
Routes
/: Home route showing a count of users.
/user: Displays a list of all users.
/user/new: Page to add a new user.
/user/:id/edit: Form to edit an existing user.
/user/:id: Handles user updates (PATCH).
/user/:id: Handles user deletion (DELETE).
License
This project is licensed under the MIT License. See LICENSE for more details.

Terminal Code for Commands

bash
Copy code
git clone <repository-url>
cd BAkend-with-sql
npm install
node app.js
