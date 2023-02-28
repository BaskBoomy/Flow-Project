const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);
const pool = mysql.createPool({
  host: "flow-project.cwaf0zkq6eam.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "flowproject",
  database: "flow",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
app.get("/getExtensionList", async (req, res) => {
  try {
    const [rows, fields] = await pool
      .promise()
      .query("SELECT * FROM ExtensionBlock");
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/updateExtension", async (req, res) => {
  const { id, name, isBlocked } = req.body;
  pool.query(
    "UPDATE ExtensionBlock SET name=?, isBlocked=? WHERE id=?",
    [name, isBlocked, id],
    (error, results, fileds) => {
      if (error) throw error;
      res.send("updated successfully");
    }
  );
});
app.post("/addExtension", async (req, res) => {
  const { name, isBlocked } = req.body;
  pool.query(
    "INSERT INTO ExtensionBlock(name,isBlocked) VALUES(?,?);",
    [name, isBlocked],
    (error, results, fileds) => {
      if (error) throw error;
      res.send("inserted successfully");
    }
  );
});
app.listen(5000, () => {
  console.log("서버가 시작되었습니다.");
});
