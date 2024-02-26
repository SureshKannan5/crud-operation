import dotenv from "dotenv";
import connectDB from "./connectDB.mjs";
import Department from "./models/DeparmentModal.mjs";

const setup = async () => {
  console.log("employee department setup");

  dotenv.config();

  try {
    await connectDB();

    const employeeDeparment = [
      {
        name: "Development",
        description: "This is development group",
      },
      {
        name: "Accounts",
        description: "This is Accounts group",
      },
      {
        name: "Testing",
        description: "This is Testing group",
      },
      {
        name: "Hr",
        description: "This is Hr group",
      },
    ];

    try {
      const exist = await Department.exists();

      if (exist) {
        await Department.deleteMany();
      }

      await Department.insertMany(employeeDeparment);

      console.log("departmet createed..");
      process.exit();
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

setup();
