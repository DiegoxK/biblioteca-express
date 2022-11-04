import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  librosPrestados: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

export default mongoose.model("User", userSchema);
