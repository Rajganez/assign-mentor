# Mentor and Student Assigning with Database

## Description

This project provides a robust API for managing mentors and students in an educational institution's database. Below are the available endpoints and their functionalities.

### Endpoints

#### 1. **`/students`**
   - Displays all students in the database.

#### 2. **`/mentors`**
   - Displays all mentors in the database.

#### 3. **`/addmentor`**
   - Add a new mentor to the database with the following details:
     - **Mentor Name**
     - **Mentor ID** (Primary Key)
     - **Mentor Proficiency**
     - **Email**
     - **Experience**
     - **Teaching Experience**

#### 4. **`/addstudent`**
   - Add a new student to the database with the following details:
     - **Student ID** (Primary Key)
     - **Name**
     - **Phone**
     - **Degree**
     - **Joinee** (new or already completed a course in the institution)
     - **Previous Mentor ID** 
     - **Mentor ID** (Student assigned to mentor)

#### 5. **Assigning Students to a Mentor**  
   **`/assignstudent/:MentorID`**
   - Assign students to a mentor based on course proficiency:
     1. **Mentor ID** (Foreign Key)
     2. Add Students:
        - Displays all students with similar course proficiency as the mentor.
        - Excludes students already assigned to a mentor.

#### 6. **Changing Mentor for a Student**  
   **`/changementor/:studentID`**
   - Change the mentor for a particular student:
     1. For a specific student ID, change the mentor by providing a new mentor ID.
     2. Replace the existing mentor ID with the new one.
     3. Push the existing mentor ID into the "Previous Mentor" field in the student's database record.

#### 7. **Displaying Students for a Particular Mentor**  
   **`/displaystudents/:mentorID`**
   - Display students assigned to a specific mentor by matching the mentor ID in the student database.

#### 8. **Displaying Students Previously Assigned to a Mentor**  
   **`/previousmentor/:studentID`**
   - Display previously assigned mentors for a particular student.

## API URL

Use the following base URL for all API endpoints:

- **API URL:** [https://assign-mentor-rwbp.onrender.com](https://assign-mentor-rwbp.onrender.com)

## Frontend

Explore the frontend interface for this API:

- **Visit Frontend:** [https://httdbadminpage.netlify.app](https://httdbadminpage.netlify.app)
- **Frontend Source Code:** [GitHub Repository](https://github.com/Rajganez/frontendAssignMentor)

## API Documentation

Run and test the API in Postman or view the detailed documentation:

- **Postman Documentation:** [View Documentation](https://documenter.getpostman.com/view/34103499/2sA3XWdycy)
