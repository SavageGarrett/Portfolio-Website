var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET index page. */
router.get('/index', function(req, res, next) {
  res.render('index/#contact');
});

/* GET resume page. */
router.get('/resume', function(req, res, next) {
  res.render('about');
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog');
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET error page. */
router.get('/error', function(req, res, next) {
  res.render('error');
});

module.exports = router;
