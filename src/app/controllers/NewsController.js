class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    };
    //[GET] /news/:slug
    show(req, res){
        res.send("NEW DETAILS");
    }
}
module.exports = new NewsController; // tạo ra instance cho một đối tượng 