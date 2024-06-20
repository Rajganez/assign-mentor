import express from "express";
import { stuCollections } from "./students.js";
import { mentorCollection } from "./mentors.js";

const stuForMentorRouter = express.Router();

stuForMentorRouter.get("/:mentorID", async (req, res) => {
  const mentorId = req.params.mentorID;
  try {
    const students = await stuCollections
      .find({ MentorID: { $eq: mentorId } }, { projection: { _id: 0 } })
      .toArray();
    const mentName = await mentorCollection.findOne({
      MentorID: { $eq: mentorId },
    });
    res
      .status(200)
      .send({ msg: `For mentor ${mentName.Name} Below students`, students });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default stuForMentorRouter;
