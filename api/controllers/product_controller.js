const Product = require("../models/product_model");
exports.list_best_products = (req, res) => {
  Product.getListBestProducts((error, result) => {
    error ? res.send(error) : res.status(200).json(result);
  });
};

exports.get_images_name = (req, res) => {
  Product.getImagesName(req.params.product_cd, (error, result) => {
    error ? res.send(error) : res.status(200).json(result);
  });
};
