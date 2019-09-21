const connection = require('../../DB/dbConnection');


module.exports.categories= function (req, res) {
  let tableName = req.params.tableDetails;

  connection.query('Select * from category', function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {

      res.json({"count":rows.length,rows})
    }
  });
}