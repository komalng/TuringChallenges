const connection = require('../DB/dbConnection');


module.exports.details = function (req, res) {
  let tableName = req.params.tableDetails;

  connection.query('Select * from ' + tableName, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {

      res.json(results)
    }
  });
}