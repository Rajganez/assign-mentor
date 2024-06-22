import express from "express";
import { mentorCollection } from "./mentors.js";

const addMentorRouter = express.Router();

addMentorRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    await mentorCollection.insertOne({
      ...payload,
      MentorID: Date.now().toString(),
    });
    res.status(201).send({ msg: "Success! Mentor has been added" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default addMentorRouter;
