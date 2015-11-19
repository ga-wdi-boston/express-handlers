var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!res.locals.movies) {
    res.locals.movies = [];
  }
  next();
});

router.get('/', function(req, res, next) {
  res.locals.movies.push({
    title: 'The Martian',
    description: 'Someone left Matt Damon in space. Again.'
  });
  next();
});

router.get('/', function(req, res, next) {
  res.locals.movies.push({
    title: 'The Green Mile',
    phone: 'I dare you to watch this and not cry.'
  });
  next();
});

router.get('/', function(req, res) {
  res.json(res.locals.movies);
  res.status(200);
});

module.exports = router;
