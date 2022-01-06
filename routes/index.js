var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'AIU Clubs' });
});
router.get('/socialClubs', function(req, res) {
  res.render('socialClubs', { title: 'Social Clubs' });
});
router.get('/academicClubs', function(req, res) {
  res.render('academicClubs', { title: 'Academic Clubs' });
});



module.exports = router;