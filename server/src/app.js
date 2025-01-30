import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// ejs setup
app.set("view engine", "ejs");

//routes import
import userRouter from "./routes/userRoute.js";

//routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:3050/api/v1/users/register

export { app };
