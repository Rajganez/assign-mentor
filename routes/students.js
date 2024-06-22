import express from "express";
import { db } from "./../db-utilities/db-connection.js";

const studentRouter = express.Router();
const stuCollections = db.collection("students");


studentRouter.get("/", async (req, res) => {
  try {
    const students = await stuCollections.find({}).toArray();
    res.status(200).send({ msg: "Total Students", students });
  } catch (error) {
    res.status(500).send({ msg: "Server error: " + error.message });
  }
});

export { stuCollections };
export default studentRouter;
