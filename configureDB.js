const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'apptest.db'");
});

//create student table
const sql_create = `CREATE TABLE IF NOT EXISTS Students(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL);`;

db.run(sql_create, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Students'");
});

//create sport table
const sql_create_sport = `CREATE TABLE IF NOT EXISTS Sports(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL);`;

db.run(sql_create_sport, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Sports'");
});

module.exports = {
  db,
};
