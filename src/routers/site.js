const express = require('express');
// const app = express()    cái này đã có ở file index nên không cần nữa 
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

// newsController.index 
router.use('/:slug',siteController.search);
router.use('/',siteController.index);

module.exports = router;