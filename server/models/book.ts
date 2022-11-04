import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  prestado: {
    type: Boolean,
    default: false,
    required: true,
  },
});

export default mongoose.model("Book", bookSchema);
