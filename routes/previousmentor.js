import express from "express";
import { stuCollections } from "./students.js";
import { mentorCollection } from "./mentors.js";

const prevMentorRouter = express.Router();

prevMentorRouter.get("/:studentId", async (req, res) => {
  const stuId = req.params.studentId;
  try {
    const prevMent = await stuCollections.findOne({ StudentID: stuId });
    if (prevMent.PreviousMentor === null) {
      res
        .status(204)
        .send({ msg: `No Previous Mentor for the Student ${prevMent.Name}` });
    } else {
      const mentDetails = await mentorCollection.findOne(
        {
          MentorID: { $eq: prevMent.PreviousMentor },
        },
        { projection: { _id: 0 } }
      );
      res
        .status(200)
        .send({ msg: `For Student ${prevMent.Name}`, mentDetails });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default prevMentorRouter;
