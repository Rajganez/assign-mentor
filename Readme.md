## Title
**Mentor and Student Assigning with Database**

## Description

**With the below Following End Points API is created**

*"/mentor"*

* Mentor Name
* Mentor ID (Primary Key)
* Mentor Proficiency
* Email
* Experience
* Teaching Information
* Add Students (Add a button)
* StudentID (Foreign Key)
* Display students (Add a button)

*"/Student*

* Student ID (Primary Key)
* Student Name
* Student Phone
* Email
* Degree
* Previous Course details
* Previous Mentor information
* Mentor id (Student assigned to mentor)
* Change mentor (Add a button)


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


