const express = require("express");
const app = express();
//department 
const allDepartment = require("./controller/departments/departments");
const singleDepartment = require("./controller/departments/department");
// categories
const categories = require('./controller/categories/categories');
const category = require('./controller/categories/category');
const productCategory = require("./controller/categories/productCategory");
const departmentCategories = require("./controller/categories/departmentCategories");
// attributes
const attributes = require("./controller/attributes/attributes");
const valuesOfAttributes = require("./controller/attributes/valuesOfAttributes")
// customer 
const register = require("./controller/customer/register");
app.use(express.json());

//Department

app.get("/departments",allDepartment.department);
app.get("/department/:id",singleDepartment.department);

//Category

app.get("/categories",categories.categories);
app.get("/category/:id",category.category);
app.get("/categories/inProduct/:product_id",productCategory.categories);
app.get("/categories/inDepartment/:department_id",departmentCategories.categories);

// attributes

app.get("/attributes",attributes.attributes);
app.get("/attributes/:attribute_id",attributes.attributesthroughid);
app.get("/attributes/values/:attribute_id",valuesOfAttributes.attributesthroughid);



// customer

app.post("/customer",register.register);


app.listen(2000,()=>{console.log("Express is listening port number 2000")})


