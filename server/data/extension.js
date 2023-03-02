import { db } from "../database/database.js";

export async function getExtensionList(req, res) {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM ExtensionBlock");
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
export async function updateExtension(req, res) {
  const { id, name, isBlocked } = req.body;
  db.query(
    "UPDATE ExtensionBlock SET name=?, isBlocked=? WHERE id=?",
    [name, isBlocked, id],
    (error, results, fileds) => {
      if (error) throw error;
      res.send("updated successfully");
    }
  );
}
export async function addExtension(req, res) {
  const { name, isBlocked, isCustom } = req.body;
  //   console.log(typeof name);
  //   console.log(name);
  //   if (name.length === 0 || name == " ") {
  //     return res.send({
  //       code: 204,
  //       message: "커스텀 확장자를 입력해주세요.",
  //     });
  //   }
  const [results, fields] = await db
    .promise()
    .query(
      "SELECT COUNT(*) as count FROM ExtensionBlock WHERE isCustom = true; "
    );

  if (results[0].count > 200) {
    return res.send({
      code: 202,
      message: "커스텀 확장자는 최대 200개 까지 추가 가능합니다.",
    });
  }

  let values = name.map((n) => {
    return [n, isBlocked, isCustom];
  });
  db.query(
    "INSERT INTO ExtensionBlock(name,isBlocked,isCustom) VALUES ?;",
    [values],
    (error, results, fileds) => {
      if (error && error.code == "ER_DUP_ENTRY") {
        return res.send({
          code: 409,
          message: `${
            error.sqlMessage.split(" ")[2]
          }의 확장자는 이미 추가되어있습니다.`,
        });
      }

      return res.send({
        code: 200,
        message: "inserted successfully",
      });
    }
  );
}
export async function deleteExtension(req, res) {
  const { id } = req.query;
  let query = "DELETE FROM ExtensionBlock";
  let where = `WHERE id =${id}`;
  if (id == 0) {
    where = "WHERE isCustom = 1;";
  }
  db.query(`${query} ${where}`, (error, results, fileds) => {
    if (error) throw error;
    res.send("Deleted successfully");
  });
}
