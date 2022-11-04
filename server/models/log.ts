import mongoose from "mongoose";

const Schema = mongoose.Schema;

const logSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  bookName: {
    type: String,
  },
});

export default mongoose.model("Log", logSchema);
