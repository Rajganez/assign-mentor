import express from "express";
import { stuCollections } from "./students.js";
import { mentorCollection } from "./mentors.js";

const assigningRouter = express.Router();

assigningRouter.get("/:mentorID", async (req, res) => {
  const mentorId = req.params.mentorID;

  try {
    const students = await stuCollections
      .find({ MentorID: null }, { projection: { _id: 0, Phone: 0 } })
      .toArray();
    res
      .status(200)
      .send({ msg: "Students below are not Assigned to a Mentor", students });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

assigningRouter.patch("/:mentorID", async (req, res) => {
  const mentorId = req.params.mentorID;
  const studentId = req.query.StudentID;
  try {
    const assignStu = await mentorCollection.updateOne(
      { MentorID: mentorId },
      { $push: { Assigned_Students: studentId } }
    );
    const stu = await stuCollections.findOne({ StudentID: studentId });
    const ment = await mentorCollection.findOne({ MentorID: mentorId });
    await stuCollections.updateOne(
      { StudentID: studentId },
      { $set: { MentorID: mentorId } }
    );
    res
      .status(200)
      .send({ msg: `Student ${stu.Name} assigned to ${ment.Name}`, ment });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default assigningRouter;
