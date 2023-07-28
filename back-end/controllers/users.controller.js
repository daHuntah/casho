var MD = require('../models/users.model');

exports.addCustomer = async (req, res, next) => {
    if (req.method === 'POST') {
        let objCus = new MD.UserModel();

        objCus.username = req.body.username;
        objCus.password = req.body.password;

        try {
            let newCus = await objCus.save();
        } catch (error) {
            console.log(error);
        }
    }
    res.render('index');
}