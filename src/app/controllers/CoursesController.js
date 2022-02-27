const Course = require('../models/Course.js');
const { mongooseToObject } = require('../../util/mongoose');
class CoursesController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                // xu ly object
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    };
    create(req, res, next) {
        res.render('courses/create');
    }
}
module.exports = new CoursesController; // tạo ra instance cho một đối tượng 