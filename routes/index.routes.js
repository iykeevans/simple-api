const express = require('express');
const router = express.Router();

//other routes import
const posts = require('./post.routes');

router.use('/api/v1/posts', posts);

module.exports = router;