const sql = require('../helpers/connect');

const Category = (category) => {
    this.category =category.category;
    this.status = category.status
}

Category.getListCategory = getListCategory = (result) => {
    mysql = "SELECT tb1.* FROM wt_category AS tb1 WHERE ISNULL(category_m_cd) AND tb1.use_yn = 'Y' ORDER BY od asc limit 10";
    sql.query(mysql, (err, res) => {
        if(err) {
            console.log(err);
            result(null, err)
        };
        result(null, res)
    })
}

module.exports = Category;