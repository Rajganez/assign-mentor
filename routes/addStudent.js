import express from "express";
import { stuCollections } from "./students.js";

const addStudentRouter = express.Router();


addStudentRouter.get("/", async (req, res) => {
  try {
    const students = await stuCollections.find({}).toArray();
    res.status(200).send({ msg: "Total Students", students });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export default addStudentRouter;
