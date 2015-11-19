var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!res.locals.contacts) {
    res.locals.contacts = [];
  }
  next();
});

router.get('/', function(req, res, next) {
  // add first group of contacts (from iPhone/iCloud?)
  res.locals.contacts.push({
    name: 'David',
    phone: '111-222-3333'
  });
  next();
});

router.get('/', function(req, res, next) {
  // add second group of contacts (from Google/Android?)
  res.locals.contacts.push({
    name: 'Brian',
    phone: '444-555-6666'
  });
  next();
});

router.get('/', function(req, res, next) {
  // add third group of contacts (from Hotmail?)
  res.locals.contacts.push({
    name: 'Alex',
    phone: '777-888-9999'
  });
  next();
});

router.get('/', function(req, res) {
  res.json(res.locals.contacts);
  res.status(200);
});

module.exports = router;
