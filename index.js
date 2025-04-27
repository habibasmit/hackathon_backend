import express from "express";
import cors from "cors";
import connectDB from "./utilis/db.js";
import dotenv from "dotenv";
import Routes from "./Routes/CrudRoutes.js";

dotenv.config();

const app = express();

await connectDB();
const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Content-Type"]
};

// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use("/crud", Routes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is Running in PORT ${PORT}`);
});
