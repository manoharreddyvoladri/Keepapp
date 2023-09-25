const { default: mongoose } = require("mongoose");

const router = require("express").Router();
const TaskSchema = require("../models/TaskModel");

router.post("/", async (req, res) => {
  const task = new TaskSchema(req.body);
  try {
    const savedTask = await task.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await TaskSchema.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
    const id=req.params.id;
    console.log(id);
  try {
    const taks = await TaskSchema.findByIdAndDelete(id);
    res.status(200).json("Sucessfully Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
