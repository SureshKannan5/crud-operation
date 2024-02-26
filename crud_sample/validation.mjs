import { body, validationResult } from "express-validator";

export const EmployeeCreateValidator = [
  body("name").notEmpty(),
  body("email").isEmail(),
  body("phoneNumber").notEmpty(),
  body("designation").notEmpty(),
  body("department").notEmpty(),
];

export const fieldValidator = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({ errors: errors.array() });
};
