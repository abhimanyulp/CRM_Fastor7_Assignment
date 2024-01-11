# CRM System Backend

## Overview

This Node.js backend serves as the foundation for a Customer Relationship Management (CRM) system. The application revolves around the management of enquiries from prospective clients and the association of CRM accounts with employees/counselors. The API follows a RESTful design, providing endpoints for employee authentication, public enquiry form submission, lead claiming, and retrieval of leads.

## Technologies Used

- Node.js
- Express Framework
- Mongodb
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abhimanyulp/CRM_Fastor7_Assignment.git
    cd CRM_Fastor7_Assignment
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the database and configure the connection in the `.env` file.

4. Start the server:

    ```bash
    npm start
    ```

## API Routes

### Authentication

#### Employee Login
- **Endpoint:** `/user/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "email": "employee@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Signin Success!",
    "token": "your_jwt_token",
    "userID": "user_id_here"
  }
  ```

#### Employee Registration
- **Endpoint:** `/user/register`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "email": "newemployee@example.com",
    "password": "securepassword",
    "role": "employee_role_here"
  }
  ```
- **Response:**
  ```json
  {
    "msg": "Registration completed!"
  }
  ```

#### Employee Logout
- **Endpoint:** `/user/logout/:token`
- **Method:** GET (Authenticated)
- **Request Params:**
  ```
  token: your_jwt_token_here
  ```
- **Response:**
  ```json
  {
    "msg": "Logout successful"
  }
  ```

### Enquiry Management

#### Submit Enquiry
- **Endpoint:** `/enquiries/create`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "course": "Course_of_interest_here"
    // Other enquiry fields
  }
  ```
- **Response:**
  ```json
  {
    "message": "Enquiry created successfully",
    "enquiry": {
      // Enquiry details
    }
  }
  ```

#### Fetch Assigned Enquiries
- **Endpoint:** `/enquiries/logs`
- **Method:** GET (Authenticated)
- **Response:**
  ```json
  {
    "message": "Enquiries fetched successfully",
    "logData": [
      // List of Assigned enquiries
    ]
  }
  ```

#### Assign Enquiry
- **Endpoint:** `/enquiries/assign`
- **Method:** PUT (Authenticated)
- **Request Headers:**
  ```
  Authorization: your_jwt_token
  ```
- **Request Body:**
  ```json
  {
    "clientEmail": "client_email_here",
    "userId": "employee_id_here"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Enquiry status updated successfully",
    "updatedEnquiry": {
      // Updated enquiry details
    }
  }
  ```

#### Fetch Assigned Enquiries
- **Endpoint:** `/enquiries/getassigned`
- **Method:** GET (Authenticated)
- **Request Headers:**
  ```
  Authorization: your_jwt_token
  ```
- **Request Body:**
  ```json
  {
    "userId": "employee_id_here"
  }
  ```
- **Response:**
  ```json
  {
    "message": "UserEnquiry fetched successfully",
    "myEnquiry": [
      // List of enquiries assigned to the employee
    ]
  }
  ```

Feel free to customize the routes and functionalities according to your specific needs.