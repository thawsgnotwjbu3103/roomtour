const mysql = require('../helpers/connect');

const Product = (product) => {
}

Product.getListBestProducts = (result) => {
    sql = `SELECT
	tb2.product_cd,
	tb2.product_nm,
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
	tb2.order_cnt,
	tb3.file_nm 
FROM
	wt_product tb2
	JOIN ( SELECT product_cd, file_nm FROM wt_product_file GROUP BY product_cd ) AS tb3 
	ON tb2.product_cd = tb3.product_cd 
ORDER BY
	tb2.order_cnt DESC 
	LIMIT 6`;
    mysql.query(sql, (err, res) => {
        if (err) result(null, "Error");
        result(null, res)
    })
};

Product.getDisplayList = (result) => {
	sql = `SELECT *
		   FROM vn_display
		   ORDER BY display_seq
		   LIMIT 3`;
	mysql.query(sql, (err, res) => {
		err ? result(null, err) : result(null, res);
	})
}

Product.getInstaList = (result) => {
	sql = `SELECT * 
		   FROM wt_insta_data
		   WHERE username = 'amante_home' 
		   ORDER BY seq 
		   DESC 
		   LIMIT 0, 10
		  `;
	mysql.query(sql, (err, res) => {
		err ? result(null, err) : result(null, res);
	})
}

module.exports = Product