import express from "express";
import { mentorCollection } from "./mentors.js";

const addMentorRouter = express.Router();

addMentorRouter.get("/", async (req, res) => {
  try {
    const mentors = await mentorCollection.find({}).toArray();
    res.status(200).send({ msg: "Total Mentors", mentors });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default addMentorRouter;
