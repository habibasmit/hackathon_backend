import mongoose from "mongoose";

const Schema = mongoose.Schema;

const crudSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const CrudModel =
  mongoose.models.Crud || mongoose.model("Crud", crudSchema);
