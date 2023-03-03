import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
import extensionRouter from "./controller/extension.js";

const app = express();
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);
app.use(express.static(path.join(__dirname, "build")));
app.get("/", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/extension", extensionRouter);
app.listen(5000, () => {
  console.log("서버가 시작되었습니다.");
});
