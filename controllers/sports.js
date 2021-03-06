function listSport(req, res, db) {
  db.all("SELECT * FROM Sports", (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(rows);
  });
}

function sportById(req, res, db) {
  const sql_select = `SELECT * FROM Sports WHERE id = ?`;
  db.all(sql_select, [req.params.id], (err, rows) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(rows);
  });
}

function createSport(req, res, db) {
  const sql_insert = `INSERT INTO Sports(name) VALUES(?)`;
  db.run(sql_insert, [req.body.name], (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
  res.send("Sport ajouté");
}

function updateSport(req, res, db) {
  const sql_update = `UPDATE Sports SET name = ? WHERE id = ?`;
  db.run(sql_update, [req.body.name, req.params.id], (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
  res.send("Sport modifié");
}

function deleteSport(req, res, db) {
  const sql_delete = `DELETE FROM Sports WHERE id = ?`;
  db.run(sql_delete, [req.params.id], (err) => {
    if (err) {
      return console.error(err.message);
    }
  });
  res.send("Sport supprimé");
}

module.exports = {
  listSport,
  sportById,
  createSport,
  updateSport,
  deleteSport,
};
