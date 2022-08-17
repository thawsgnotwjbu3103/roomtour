const topMenu = require('../models/topMenu_model');

exports.list_top_menu = (req, res) => {
    topMenu.getTopMenu((error, result) => {
        error ? res.send(error) : res.status(200).json(result)
    })
}


