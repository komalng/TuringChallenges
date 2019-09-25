const connection = require('../DB/dbConnection');
const randomstring = require("randomstring");



module.exports.login = function (req, res) {
  
    var user= {
      "email": req.body.email,
      "password": req.body.password,
    }
    connection.query("select * from customer where email = ? ",[user.email],(error,results)=>{
        if (error) {
            console.log(error);
            res.json({
              status: false,
              message: error
            })
          }
        res.send({results,"accessToken": "Bearer "+randomstring.generate()
        ,
        "expiresIn": "24h"}
    
    );
    })
    
  }
  




module.exports.register = function (req, res) {
  
    var users = {
      "name": req.body.name,
      "email": req.body.email,
      "password": req.body.password,
    }
    connection.query('INSERT INTO customer SET ?', users, function (error, results, fields) {
      if (error) {
        console.log(error);
        res.json({
          status: false,
          message: error
        })
      } else {
          connection.query("select * from customer",(error,results)=>{
              if(error){
                  res.json({message:error})
              }
              res.send({"customer":results});

          })
        
      }
    });
  }
  

  