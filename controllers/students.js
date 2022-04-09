function listStudent(req, res, db) {
  const query = `SELECT * FROM Students`;
  db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
}

function createStudent(req, res, db) {
  const newstudent = req.body;
  const query = `insert into students(name) values('${newstudent.name}')`;
  db.run(query, [], (err) => {
    if (err) {
      throw err;
    }
    res.json(newstudent);
  });
}

module.exports = {
  listStudent,
  createStudent,
};
