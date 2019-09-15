const connection = require('../DB/dbConnection');


module.exports.single = function (req, res) {
  let id = req.params.id;

  connection.query('Select * from category where category_id  = ?', id, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (results.length === 0) {
        res.json({
          message: 'category_id is not exists in category_id',
          data: results
        })

      } else {
        res.json(results)
      }
    }
  });
}