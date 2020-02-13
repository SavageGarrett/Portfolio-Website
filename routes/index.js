var express = require('express');
var router = express.Router();
var debugHandler = require('../bin/debug.js');
var onelookAPI = require('../api/onelookAPI.js')
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  debugHandler("HTTP request at /");
  res.render('index');
});

router.get('/:query', function (req, res, next){
  let query = req.params['query'];
  debugHandler("HTTP request at /" + query);

  /* Handle Possible Page Querys */
  switch(query){
    /* Render Index */
    case "index":
      res.render('index');
      break;
    /* Render Resume Page */
    case "resume":
      res.sendFile(path.join(__dirname + '/../public/pdf/resume.pdf'));
      break;
    /* Render Portfolio Page */
    case "porfolio":
      res.render('portfolio');
      break;
    /* Render Blog Page */
    case "blog":
      res.render('blog');
      break;
    /* Render Contact Page */
    case "contact":
      res.render('contact');
      break;
    /* Pangea Poster */
    case "pangea-flyer":
      res.sendFile(path.join(__dirname + '/../public/pdf/pangea-flyer.pdf'))
      break;
    /* Render Error Page */
    case "error":
      res.render('error');
      break;
    /* Render Error Page if no other page is found */
    default:
      res.render('error');
      break;
  }
});

router.get('/.well-known/acme-challenge/GFv_EgteQc9DKfMaM__OMTXyB_AreNZb8-WzTZExkpY', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../public/acme-challenge/acme'))
})

module.exports = router;
