const newsRouter = require('./news.js');
const SiteRouter = require('./site.js');
function route(app) {
    // Action ---> Dispatcher ---> function handle (function handle chính là controller)
    app.use('/news',newsRouter);
    app.use('/',SiteRouter);

}
module.exports = route;