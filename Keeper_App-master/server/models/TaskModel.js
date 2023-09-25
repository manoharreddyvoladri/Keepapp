const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  title: { type: String },
  content: { type: String },
});

module.exports=mongoose.model("TaskModal",TaskSchema);