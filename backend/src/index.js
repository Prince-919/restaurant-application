import express from "express";
import cors from "cors";
import config from "./config/config.js";
import dbConnect from "./config/db.js";
import { errorMiddleware } from "./utils/error.js";
import reservationRouter from "./routes/reservation.js";

const app = express();

app.use(
  cors({
    origin: [config.get("frontendUrl")],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.use(errorMiddleware);

const serverStart = async () => {
  try {
    await dbConnect();
    const port = config.get("port") || 8000;
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
serverStart();
