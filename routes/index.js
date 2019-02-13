var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sinan' });
});

module.exports = router;

// please send back a response to the browser containing the HTML code of this index 
// file and .hbs is automatically added since handlebars is set
//set up as two default view engine of this project
// not only send the status HTML code here but before sending it back
// replace all hooks between double curly braces with the appropriate
// or corresponding data pass the second arfu,em {title: 'Express'}