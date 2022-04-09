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
    console.log(`Ajout réussi de la ligne ${this.lastID}`);
  });
  res.send("Sport ajouté");
}

function deleteSport(req, res, db) {
  const sql_delete = `DELETE FROM Sports WHERE id = ?`;
  db.run(sql_delete, [req.params.id], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Suppression réussie de la ligne ${this.lastID}`);
  });
  res.send("Sport supprimé");
}

module.exports = {
  listSport,
  sportById,
  createSport,
  deleteSport,
};
