const connection = require('../DB/dbConnection');



module.exports.products = function (req, res) {
  let user = req.query;
  if ((Object.keys(user).length === 0)) {
    user.startPage = 1;
    user.limit = 20;
    user.description_length = 200;
  }

  connection.query(`select * from product  where product_id between ? and ?+ ?-1`, [user.startPage, user.startPage, user.limit], (error, results) => {
    if (error) {
      console.log(error);
      res.json({
        status: false,
        message: 'there are some error with query :->'
      })
    } else {
      for (let result of results) {
        description = result.description.substring(0, user.description_length);
        result.description = description;
      }
      res.send(results);
    }
  })

}




module.exports.searchProduct = function (req, res) {
  let query_string = req.query;
  console.log(query_string)
  connection.query(`select * from product  where product_id = ?`, [query_string.query_string], (error, results) => {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
    res.send(results);
  })
}


module.exports.singleProduct = function (req, res) {
  let productId = req.params.productId;
  connection.query(`select * from product  where product_id = ?` , [productId], (error, results) => {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
    res.send(results);
  })
}


module.exports.ProductThroughCategoryId = function (req, res) {
  let user = req.query;
  if ((Object.keys(user).length === 0)) {
    user.startPage = 1;
    user.limit = 20;
    user.description_length = 200;
  }
  let category_id = req.params.category_id;
  let query =  "select product.name,product.description,product.price,product.discounted_price,product.thumbnail,product_category.product_id from product,product_category where product_category.category_id = ?"
  connection.query(query,[category_id], (error, results) => {
    // console.log(error)
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
    let rows = [];
    for(let i = user.startPage; i <= user.startPage+user.limit-1; i++){
      let description = results[i].description.substring(0, user.description_length);
      results[i].description = description;
      rows.push(results[i])
    }
    res.send({"count":rows.length,rows});

  })
}




