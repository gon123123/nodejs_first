const newsRouter = require('./news.js');
const coursesRouter = require('./courses.js');
const siteRouter = require('./site.js');
function route(app) {
     // Action ---> Dispatcher ---> function handle (function handle chính là controller)
     app.use('/news', newsRouter);
     app.use('/courses', coursesRouter);
     app.use('/', siteRouter);

}
module.exports = route;