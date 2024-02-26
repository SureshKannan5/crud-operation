import express from "express";
import {
  createEmployee,
  deleteEmployeeById,
  getEmployeeById,
  updateEmployeeById,
} from "./employeeController.mjs";
import { EmployeeCreateValidator, fieldValidator } from "./validation.mjs";

const employeeRoutes = express.Router();

employeeRoutes
  .route("/create")
  .post(EmployeeCreateValidator, fieldValidator, createEmployee);

employeeRoutes
  .route("/:id")
  .get(getEmployeeById)
  .put(updateEmployeeById)
  .delete(deleteEmployeeById);

export default employeeRoutes;
