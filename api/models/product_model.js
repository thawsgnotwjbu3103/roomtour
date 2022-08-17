const mysql = require('../helpers/connect');

const Product = (product) => {
}

Product.getListBestProducts = (result) => {
    sql = `SELECT
    tb2.product_cd,
	tb2.product_nm,
	tb2.supply_price,
	tb2.sale_price,
	tb2.discount_gb,
	tb2.fee_rate,
	tb2.icon,
	tb2.product_state,
	tb2.del_yn,
	tb2.product_type,
	tb2.POINT,
	tb2.review_cnt,
	tb2.order_cnt
    FROM wt_product tb2
    ORDER BY tb2.order_cnt desc
    LIMIT 6`;
    mysql.query(sql, (err, res) => {
        if (err) result(null, "Error");
        result(null, res)
    })
};

Product.getImagesName = (product_cd, result) => {
	sql= "SELECT file_nm from wt_product_file WHERE product_cd = ? limit 1";
	mysql.query(sql, product_cd, (err, res) => {
		if(err) result(null, err);
		result(null, res)
	})
}

module.exports = Product