import express from "express";
import { stuCollections } from "./students.js";

const addStudentRouter = express.Router();

addStudentRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    await stuCollections.insertOne({
      ...payload,
      StudentID: Date.now().toString(),
    });
    res.status(201).send({ msg: "Success! Student has been added" });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default addStudentRouter;
