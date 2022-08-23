const Category = require('../models/category_model');

exports.list_category = (req, res) => {
    Category.getListCategory((error, result) => {
        if(error){
            console.log(error);
            res.send(error)
        };
        res.send(result)
    })
}