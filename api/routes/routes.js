module.exports = (app) => {
  const topMenuController = require("../controllers/topMenu_controller");
  app.route("/top_menu").get(topMenuController.list_top_menu);

  const ProductController = require("../controllers/product_controller");
  app.route("/best_products").get(ProductController.list_best_products);
  app.route('/list_display').get(ProductController.get_display_list);
  app.route('/list_insta').get(ProductController.get_insta_list);

  const productNewController = require("../controllers/productNew_controller");
  app.route("/get_product_new").get(productNewController.getProductNew);

  const CategoryController = require('../controllers/category_controller');
    app.route('/list_category').get(CategoryController.list_category);

  const ReviewController = require('../controllers/review_controller')
    app.route('/reviews').get(ReviewController.get_list_reviews)
};
