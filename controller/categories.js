const connection = require('../DB/dbConnection');


module.exports.categories = function (req, res) {
  let tableName = req.params.tableDetails;

  connection.query('Select * from category', function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {

      res.json({
        "count": rows.length,
        rows
      })
    }
  });
}




module.exports.category = function (req, res) {
  let id = req.params.id;

  connection.query('Select * from category where category_id = ?', id, function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (results.length === 0) {
        res.json({
          message: 'category_id is not exists in category table',
          data: results
        })

      } else {
        res.json(results)
      }
    }
  });
}

module.exports.productCategory = function (req, res) {
  let department_id = req.params.department_id;
  query = 'select * from category where department_id = ?';
  connection.query(query, [department_id], function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (rows.length < 1) {
        res.json({
          message: "product_id is not exists",
          data: rows
        })
      } else {

        res.json(rows)
      }
    }
  });
}




module.exports.departmentCategories = function (req, res) {
  let product_id = req.params.product_id;
  query = 'Select category.category_id,category.department_id, category.name  from category,product_category where product_category.product_id =? and category.category_id = ?';
  connection.query(query, [product_id, product_id], function (error, rows, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      if (rows.length < 1) {
        res.json({
          message: "product_id is not exists",
          data: rows
        })
      } else {

        res.json(rows)
      }
    }
  });
}