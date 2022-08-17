const mysql = require('../helpers/connect')

const topMenu = (menu) => {
}

topMenu.getTopMenu = (result) => {
    const sql = "SELECT * FROM wt_banner WHERE banner_cd = '106' AND use_yn = 'Y' and display_Sdate <= now() AND display_Edate >= now() ORDER BY od DESC, reg_date DESC";
    mysql.query(sql, (err, res) => {
        err ? result(null, err) : result(null, res);  
    })
}

module.exports = topMenu