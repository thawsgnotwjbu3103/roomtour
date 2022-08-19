const mysql = require("../helpers/connect");

const Product = () => {};

Product.getProductNew = (result) => {
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
	tb2.reg_date,
  tb3.file_nm
    FROM wt_product tb2
    JOIN ( SELECT product_cd, file_nm FROM wt_product_file GROUP BY product_cd ) AS tb3 
    ON tb2.product_cd = tb3.product_cd 
		ORDER BY tb2.reg_date DESC
    LIMIT 16 
    `;
  mysql.query(sql, (err, res) => {
    if (err) result(null, "Error");
    result(null, res);
  });
};

module.exports = Product;
