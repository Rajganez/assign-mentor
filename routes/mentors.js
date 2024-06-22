import express from "express";
import { db } from "./../db-utilities/db-connection.js";

const mentorRouter = express.Router();
const mentorCollection = db.collection("mentors");

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
