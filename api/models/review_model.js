const mysql = require('../helpers/connect');

const Review = review => {}

Review.getListReview = result => {
    sql = `SELECT 
                room_tour_view_seq,
                name,
                event,
                number_comment,
                file_img,
                number_like
            FROM vn_room_tour_review
            ORDER BY number_like DESC
            LIMIT 3
          `
    mysql.query(sql, (err, res)=> {
        err ? result(null, err) : result(null, res)
    })
}

module.exports = Review