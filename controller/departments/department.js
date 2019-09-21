const connection = require('../../DB/dbConnection');


module.exports.department = function (req, res) {
  let id = req.params.id;

  connection.query('Select * from department where department_id = ?', id, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (results.length === 0) {
        res.json({
          message: 'department_id is not exists in department table',
          data: results
        })

      } else {
        res.json(results)
      }
    }
  });
}