import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import customerRoutes from "./routes/customerRoutes.js";
import cors from "cors";
dotenv.config();
import connectDb from "./config/db.js";
import morgan from "morgan";
import helmet from "helmet";
const app = express();
connectDb();
app.use(express.static("./files"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));
app.use(helmet());
app.use("/api/customer", customerRoutes);

app.listen(5500, () => {
  console.log("app is listning".bgCyan);
});
