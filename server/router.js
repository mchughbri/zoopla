const express = require('express');
const router = express.Router();
const results = require('./routes/results');
const search = require('./routes/search');
let siteGlobals = {
    prodcss : "/css/main.css"
}

router.get('/', search);//catch root calls
router.get('/search', search);
router.get('/results', results);

module.exports = router;
