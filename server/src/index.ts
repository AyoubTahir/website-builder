import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

//test api
app.get("/users", (req, res) => {
  try {
    const users = prisma.user.findMany();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//start server
const PORT = /*process.env.PORT ||*/ 4001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
