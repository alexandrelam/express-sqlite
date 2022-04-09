function listStudent(req, res, db) {
  db.all(`SELECT * FROM Students`, [], (err, rows) => {
    if (err) {
      throw err;
    }

    if (rows.length === 0) {
      res.send("No students found");
    }

    res.json(rows);
  });
}

function createStudent(req, res, db) {
  const newstudent = req.body;
  db.run(
    `insert into students(name) values('${newstudent.name}')`,
    [],
    (err) => {
      if (err) {
        throw err;
      }
      res.json(newstudent);
    }
  );
}

module.exports = {
  listStudent,
  createStudent,
};
