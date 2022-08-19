module.exports = (app) => {
  const topMenuController = require("../controllers/topMenu_controller");
  app.route("/top_menu").get(topMenuController.list_top_menu);

  const ProductController = require("../controllers/product_controller");
  app.route("/best_products").get(ProductController.list_best_products);

  app.route("/get_images/:product_cd").get(ProductController.get_images_name);

  const productNewController = require("../controllers/productNew_controller");
  app.route("/get_product_new").get(productNewController.getProductNew);
};
