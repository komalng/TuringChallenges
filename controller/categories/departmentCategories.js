const connection = require('../../DB/dbConnection');


module.exports.categories = function (req, res) {
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