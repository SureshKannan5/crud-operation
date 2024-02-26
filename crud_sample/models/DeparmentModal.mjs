import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DepartmentSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", DepartmentSchema);

export default Department;
