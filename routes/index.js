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
    case "sites":
      res.render('sites');
      break;
    /* Pangea Poster */
    case "pangea-flyer":
      res.sendFile(path.join(__dirname + '/../public/pdf/pangea-flyer.pdf'))
      break;
    /* Render Error Page */
    case "error":
      res.render('error');
      break;
    case "traveler":
      res.redirect('https://focused-lewin-02418e.netlify.com/');
      break;
    /* Render Error Page if no other page is found */
    default:
      res.render('error');
      break;
  }
});

let last_template = "eatwell";

router.get('/public/templates/:template', (req, res, next) => {
  let template = req.params.template;

  switch (template) {
    case 'bollywood':
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/index.html'));
      break;
    case 'menu.html':
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/menu.html'));
      break;
    case 'about.html':
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/about.html'));
      break;
    case 'contact.html':
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/contact.html'));
      break;
    case 'contact_success.html':
      console.log('sanity check')
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/contact_success.html'));
      break;
    case 'menu.pdf':
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/menu.pdf'));
      break;
    default:
      res.sendFile(path.join(__dirname, '../public/templates/eatwell/index.html'));
      break;
  }
  
});

router.get('/public/templates/:folder/:file', (req, res, next) => {
  let folder = req.params.folder, file = req.params.file;
  res.sendFile(path.join(__dirname, `../public/templates/${last_template}/${folder}/${file}`))
});

router.get('/public/templates/:folder1/:folder2/:file', (req, res, next) => {
  let folder1 = req.params.folder1, folder2 = req.params.folder2, file = req.params.file;
  res.sendFile(path.join(__dirname, `../public/templates/${last_template}/${folder1}/${folder2}/${file}`))
});

router.get('/public/templates/:folder1/:folder2/:folder3/:file', (req, res, next) => {
  let folder1 = req.params.folder1, folder2 = req.params.folder2, folder3 = req.params.folder3, file = req.params.file;
  res.sendFile(path.join(__dirname, `../public/templates/${last_template}/${folder1}/${folder2}/${folder3}/${file}`))
});

router.get('/.well-known/acme-challenge/:id', (req, res, next) => {
  let id = req.params.id;
  res.sendFile(path.join(__dirname, `../public/.well-known/acme-challenge/${id}`))
})

module.exports = router;
