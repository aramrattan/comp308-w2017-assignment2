let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home'
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('content/about.ejs', {
    title: 'About'
   });
});
/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services.ejs', {
    title: 'Services'
   });
});
/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects.ejs', {
    title: 'Projects'
   });
});
/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact.ejs', {
    title: 'Contact'
   });
});



module.exports = router;
