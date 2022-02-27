const Course = require('../models/Course.js');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SitesController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                // coursers ở đây là một object tạo từ object constructor 
                // handlebars <= 5.0.0 thì mới dùng từ khóa this đc , 
                // bây giờ thì phải chuyển sang object thường lit te rồ
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // res.render('home');
    };
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SitesController; // tạo ra instance cho một đối tượng 