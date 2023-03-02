import mysql from "mysql2";

export const db = mysql.createPool({
  host: "flow-project.cwaf0zkq6eam.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "flowproject",
  database: "flow",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
