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
app.put("/updateExtension", async (req, res) => {
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
  const { name, isBlocked, isCustom } = req.body;
  const [results, fields] = await pool
    .promise()
    .query(
      "SELECT COUNT(*) as count FROM ExtensionBlock WHERE isCustom = true; "
    );

  if (results[0].count > 6) {
    return res.send({
      code: 201,
      message: "커스텀 확장자는 최대 200개 까지 추가 가능합니다.",
    });
  }

  pool.query(
    "INSERT INTO ExtensionBlock(name,isBlocked,isCustom) VALUES(?,?,?);",
    [name, isBlocked, isCustom],
    (error, results, fileds) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          return res.send({
            code: 409,
            message: `${name}의 확장자는 이미 추가되어있습니다.`,
          });
        }
      }

      return res.send({
        code: 200,
        message: "inserted successfully",
      });
    }
  );
});
app.delete("/deleteExtension", async (req, res) => {
  const { id } = req.query;
  pool.query(
    "DELETE FROM ExtensionBlock WHERE id =?;",
    [id],
    (error, results, fileds) => {
      if (error) throw error;
      res.send("Deleted successfully");
    }
  );
});
app.listen(5000, () => {
  console.log("서버가 시작되었습니다.");
});
