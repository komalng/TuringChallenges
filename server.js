const express = require("express");
const app = express();
const department = require("./controller/tableDetails");
const singleDepartment = require("./controller/singleDepartment");
const singleCategory = require("./controller/singleCategory");
const newCustomer = require("./controller/newCustomer");


app.get("/:tableDetails",department.details);
app.get("/departments/:id",singleDepartment.single);
app.get("/category/:id",singleCategory.single);
app.post("/api/customer",newCustomer.customer);



app.listen(2000,()=>{console.log("Express is listening port number 2000")})


