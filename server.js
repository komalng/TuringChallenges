const express = require("express");
const app = express();

const department = require("./controller/department");
const categories = require('./controller/categories');
const attributes = require("./controller/attributes");
const product = require("./controller/products");
const customer = require("./controller/customer");
app.use(express.json());

//Department

app.get("/departments", department.department);
app.get("/department/:id", department.departmentThroughId);

//Category

app.get("/categories", categories.categories);
app.get("/category/:id", categories.category);
app.get("/categories/inProduct/:product_id", categories.productCategory);
app.get("/categories/inDepartment/:department_id", categories.departmentCategories);

// attributes

app.get("/attributes", attributes.attributes);
app.get("/attributes/:attribute_id", attributes.attributesthroughid);
app.get("/attributes/values/:attribute_id", attributes.attributeValuesthroughid);


//product 

app.get("/products", product.products)
app.get("/product",product.searchProduct);
app.get("/product/:productId",product.singleProduct);
app.get("/products/inCategory/:category_id",product.ProductThroughCategoryId)

// customer

app.post("/customer", customer.register);
app.post("/customer/login", customer.login);



app.listen(2000, () => {
    console.log("Express is listening port number 2000")
})