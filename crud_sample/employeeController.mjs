import Employee from "./models/employeeModal.mjs";

const createEmployee = async (req, res) => {
  const { email, phoneNumber, department, name, designation } = req.body;

  //   console.log(req.body);

  const userInstance = new Employee({ ...req.body });

  try {
    await userInstance.save();

    res.status(200).json({ message: "employee create sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

const updateEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  const { name, email, phoneNumber, department, designation } = req.body;

  if (employee) {
    employee.name = name ? name : employee.name;
    employee.email = email ? email : employee.email;
    employee.phoneNumber = phoneNumber ? phoneNumber : employee.phoneNumber;
    employee.department = department ? department : employee.department;
    employee.designation = designation ? designation : employee.designation;

    try {
      await employee.save();

      res.json({ message: "profile updated sucessfully" });
    } catch (error) {
      res.status(404).json({ message: "Internal server error" });
    }
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

const deleteEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    await employee.deleteOne({ _id: employee.id });
    res.json({ message: "employee deleted sucessfully" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

export {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
