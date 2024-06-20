import express from "express";
import { stuCollections } from "./students.js";
import { mentorCollection } from "./mentors.js";

const changeMentorRouter = express.Router();

//Displaying All Mentors Expect the Mentor already assigned to that student
changeMentorRouter.get("/:StudentID", async (req, res) => {
  const studentId = req.params.StudentID;
  try {
    const mentID = await stuCollections.findOne({ StudentID: studentId });
    const mentorId = mentID.MentorID;
    const availableMentors = await mentorCollection
      .find({ MentorID: { $ne: mentorId } })
      .toArray();
    res.status(200).send({
      msg: "Mentors Expect already Assigned Mentor",
      availableMentors,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

changeMentorRouter.post("/:StudentID", async (req, res) => {
  const Id = req.query.MentorID;
  const studentId = req.params.StudentID;
  try {
    const mentID = await stuCollections.findOne({ StudentID: studentId });
    const mentorId = mentID.MentorID;
    await stuCollections.updateOne(
      { StudentID: studentId },
      { $set: { PreviousMentor: mentorId } }
    );
    await stuCollections.updateOne(
      { StudentID: studentId },
      { $set: { MentorID: Id } }
    );
    const currentMentor = await mentorCollection.findOne({
      MentorID: { $eq: mentorId },
    });
    const newMentor = await mentorCollection.findOne({
      MentorID: { $eq: Id },
    });

    res.status(200).send({
      msg: `Mentor Changed for Student ${mentID.Name}, Mentor ${currentMentor.Name} changed to ${newMentor.Name}`,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default changeMentorRouter;
