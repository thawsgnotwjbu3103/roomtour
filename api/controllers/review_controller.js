const Review = require('../models/review_model');

exports.get_list_reviews = (req, res) => {
    Review.getListReview((error, result) => {
        error ? res.send(error) : res.status(200).json(result)
    })
}