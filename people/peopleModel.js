const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  findById,
  remove
};

async function insert(person) {
  const [id] = await db("people").insert(person);
  return findById(id);
}

function findById(id) {
  return db("people")
    .where({ id })
    .first();
}

function remove(id) {
  return db("people")
    .where("id", id)
    .del();
}
