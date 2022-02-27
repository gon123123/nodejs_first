const express = require('express');
// const app = express()    cái này đã có ở file index nên không cần nữa 
const router = express.Router();
const siteController = require('../app/controllers/SiteController.js');

// newsController.index 
router.get('/:slug',siteController.search);
router.get('/',siteController.index);

module.exports = router;