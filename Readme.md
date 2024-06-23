## Title
**Mentor and Student Assigning with Database**

## Description

**With the below Following End Points API is created**

*"/students"*

* Displays all Students in the database

*"/mentors"*

* Displays all Mentors in the database

*"/addmentor"*

* Mentor Name
* Mentor ID (Primary Key)
* Mentor Proficiency
* Email
* Experience
* Teaching_Exp

*"/addstudent*

* Student ID (Primary Key)
* Name
* Phone
* Degree
* Joinee (new or already completed a course in instituition)
* Previous_Mentor (ID) 
* Mentor id (Student assigned to mentor)

**Assigning Students to Mentor**
*"/assignstudent/:MentorID"*

1. Mentor ID (Foreign Key)
2. Add Students
    - Display All Students with similar Course proficiency with the mentor
    - Not to be displayed - Already assigned student

**Changing Mentor for a Student**
*"/changementor/:studentID"*

1. For Particular student ID - Change mentor by getting mentor ID 
    - Replace the exsisting Mentor ID with the New 
    - Push the exsisting Mentor ID into the Previous Mentor information in student DB 

**Displaying Students for Particular Mentor**
*"/displaystudents/:mentorID"*

1. Lookup the Params MentorID with the mentor id in the student DB
    - Display the Students data

**Display Students who Assigned Previuos with a Mentor**
*"/previousmentor/:studentID"*

1. Displaying previously assigned Mentor for a particular Student 

## API URL:

**Below API URL to use with above API endpoints**
* https://assign-mentor-rwbp.onrender.com

## Visit :

*Front End for this API*

**https://httdbadminpage.netlify.app/**

*Front End Source Code Git-hub Link below*

**https://github.com/Rajganez/frontendAssignMentor**

## Run In PostMan or View:

**https://documenter.getpostman.com/view/34103499/2sA3XWdycy**