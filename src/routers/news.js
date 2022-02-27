const express = require('express');
// const app = express()    cái này đã có ở file index nên không cần nữa 
const router = express.Router();
const newsController = require('../app/controllers/NewsController.js')

// newsController.index 
router.get('/:slug',newsController.show);
router.get('/',newsController.index);

module.exports = router;