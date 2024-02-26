import mongoose from "mongoose";

const Schema = mongoose.Schema;

const {
  Types: { ObjectId },
} = Schema;

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    department: { type: ObjectId, required: true, ref: "Department" },
    designation: { type: String, required: true },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
