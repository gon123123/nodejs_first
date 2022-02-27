const express = require('express');
// const app = express()    cái này đã có ở file index nên không cần nữa 
const router = express.Router();
const coursesController = require('../app/controllers/CoursesController');
router.get('/create', coursesController.create);
router.get('/:slug', coursesController.show);
     
module.exports = router;     