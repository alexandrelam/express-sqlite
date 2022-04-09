const { db } = require("./configureDB");

//sql insert student to db
const sql_insert_student = `INSERT INTO Students(name) VALUES(?)`;
db.run(sql_insert_student, ["Alexandre"]);
db.run(sql_insert_student, ["Vincent"]);
db.run(sql_insert_student, ["Pierre"]);
db.run(sql_insert_student, ["Jean"]);

//sql insert sport to db
const sql_insert_sport = `INSERT INTO Sports(name) VALUES(?)`;
db.run(sql_insert_sport, ["Football"]);
db.run(sql_insert_sport, ["Basket"]);
db.run(sql_insert_sport, ["Handball"]);
db.run(sql_insert_sport, ["Tennis"]);
