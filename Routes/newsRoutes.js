const express = require('express')
const router = express.Router();
const newsController = require('../Controllers/newsController');
const upload = require('../Middelware/imgUpload');
const jwtMiddleware = require('../Middelware/auth');

router.get('/', newsController.get_all_news);
router.get('/:id', newsController.get_news_with_id);

router.post('/post-news', jwtMiddleware, upload, newsController.post_news);
module.exports = router;