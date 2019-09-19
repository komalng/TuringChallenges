const connection = require('../DB/dbConnection');


module.exports.customer = function (req, res) {
    var users = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password,
      }
  console.log(details)
// connection.query('INSERT INTO customer SET ?', details, function (error, results, fields) {
//     if (error) {
//       res.json({
//         status: false,
//         message: 'there are some error with query'
//       })
//     } else {
//       verification.verificate(users.email, users.name)
//       res.json({
//         status: true,
//         data: results,
//         message: 'user registered sucessfully'
//       })
//     }
// })
}
  