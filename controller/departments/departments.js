const connection = require('../../DB/dbConnection');


module.exports.department = function (req, res) {
  let tableName = req.params.tableDetails;

  connection.query('Select * from department', function (error, results, fields) {
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