import express from "express";
import connectToDB from "./db-utilities/db-connection.js";
import studentRouter from "./routes/students.js";
import mentorRouter from "./routes/mentors.js";
import assigningRouter from "./routes/assignStudent.js";
import changeMentorRouter from "./routes/changeMentor.js";
import stuForMentorRouter from "./routes/displayStudents.js";
import prevMentorRouter from "./routes/previousmentor.js";

const app = express();
await connectToDB();
app.use(express.json());

app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
app.use("/assignstudent", assigningRouter);
app.use("/changementor", changeMentorRouter);
app.use("/displaystudents", stuForMentorRouter);
app.use("/previousmentor", prevMentorRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`${Date().toString()} -- Server is running on port : ${port}`);
});
