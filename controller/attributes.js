const connection = require('../DB/dbConnection');


module.exports.attributes = function (req, res) {

  connection.query('Select * from attribute ', function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query, dont worry smile and start again :)'
      })
    } else {

      res.json(rows)
    }
  });
}

module.exports.attributesthroughid = function (req, res) {
  let attribute_id = req.params.attribute_id;
  let query = 'select * from attribute where attribute_id = ?'

  connection.query(query, [attribute_id], function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (rows.length < 1) {
        res.send({
          message: "attribute_id is not exists",
          data: rows
        })
      } else {

        console.log("Hello");
        res.json(rows)
      }
    }
  });
}

module.exports.attributeValuesthroughid= function (req, res) {
    let attribute_id = req.params.attribute_id;
    let query = 'select  attribute_value_id, value from attribute_value where attribute_id = ?'

    connection.query(query,[attribute_id], function (error, rows, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      } else {
          if(rows.length < 1){
              console.log("hello");
              res.send({
                  message:"attribute_id is not exists in attribute_value",
                  data:rows
              })
          }
          else{
  
        res.json(rows)
          }
      }
    });
  }