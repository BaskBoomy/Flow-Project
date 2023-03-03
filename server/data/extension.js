import { db } from "../database/database.js";

export async function getExtensionList(req, res) {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM ExtensionBlock");
    res.send(rows);
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
export async function getExtensionListWhereIsBlocked(req, res) {
  try {
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM ExtensionBlock WHERE isBlocked = 1");
    res.send(rows);
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
export async function getExtensionReferenceList(req, res) {
  try {
    //cache 처리?
    const [rows, fields] = await db
      .promise()
      .query("SELECT * FROM ExtensionReference");
    res.send(rows);
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
export async function updateExtension(req, res) {
  try {
    const { id, name, isBlocked } = req.body;
    db.query(
      "UPDATE ExtensionBlock SET name=?, isBlocked=? WHERE id=?",
      [name, isBlocked, id],
      (error, results, fileds) => {
        if (error) throw error;
        res.send("updated successfully");
      }
    );
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
export async function addExtension(req, res) {
  try {
    const { name, isBlocked, isCustom } = req.body;
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
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
export async function deleteExtension(req, res) {
  try {
    const { id } = req.query;
    let query = `DELETE FROM ExtensionBlock WHERE id =${id}`;
    if (id == 0) {
      query = "DELETE FROM ExtensionBlock WHERE isCustom = 1";
    }
    db.query(query, (error, results, fileds) => {
      if (error) throw error;
      res.send("Deleted successfully");
    });
  } catch (e) {
    res.status(500).send("Internal Server Error");
    throw e;
  }
}
