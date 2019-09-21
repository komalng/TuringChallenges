const connection = require('../../DB/dbConnection');


module.exports.attributes= function (req, res) {

  connection.query('Select * from attribute ', function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {

      res.json(rows)
    }
  });
}

module.exports.attributesthroughid= function (req, res) {
    let attribute_id = req.params.attribute_id;
    let query = 'select * from attribute where attribute_id = ?'

    connection.query(query,[attribute_id], function (error, rows, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      } else {
          if(rows.length < 1){
              res.send({
                  message:"attribute_id is not exists",
                  data:rows
              })
          }
          else{
  
        res.json(rows)
          }
      }
    });
  }