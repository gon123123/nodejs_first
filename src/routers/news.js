const express = require('express');
// const app = express()    cái này đã có ở file index nên không cần nữa 
const router = express.Router();
const newsController = require('../app/controllers/NewsController.js')

// newsController.index 
router.use('/:slug',newsController.show);
router.use('/',newsController.index);




module.exports = router;