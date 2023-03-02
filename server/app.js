import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import extensionRouter from "./controller/extension.js";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);

app.use("/extension", extensionRouter);

app.listen(5000, () => {
  console.log("서버가 시작되었습니다.");
});
