const Product = require("../models/productNew_model");
exports.getProductNew = (req, res) => {
  Product.getProductNew((error, result) => {
    error ? res.send(error) : res.status(200).json(result);
  });
};
