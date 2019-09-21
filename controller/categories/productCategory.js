const connection = require('../../DB/dbConnection');


module.exports.categories = function (req, res) {
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