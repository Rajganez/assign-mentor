import express from "express";
import { db } from "./../db-utilities/db-connection.js";

const mentorRouter = express.Router();
const mentorCollection = db.collection("mentors");

mentorRouter.post("/", async (req, res) => {
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

mentorRouter.get("/", async (req, res) => {
  try {
    const mentors = await mentorCollection.find({}).toArray();
    res.status(200).send({ msg: "Total Mentors", mentors });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export { mentorCollection };
export default mentorRouter;
