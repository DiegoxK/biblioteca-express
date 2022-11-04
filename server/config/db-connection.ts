import { Express } from "express";
import mongoose from "mongoose";

const PORT = 3200;

const connectDB = (app: Express): void => {
  const URI: string | undefined = process.env.DATABASE_URI;

  if (URI !== undefined) {
    mongoose
      .connect(URI)
      .then((db) => {
        console.log(`Connected to ${db.connection.db.databaseName}`);
        app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("No Database URI found");
  }
};

export default connectDB;
