const express = require('express');
const router = express.Router();
const data = require('./data')

const march = data[0];
const april = data[1];
const may = data[2];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {data: may});
});

router.get('/may', (req, res) => {
  res.render('index', {data: may});
});

router.get('/april', (req, res) => {
  res.render('index', {data: april});
});

router.get('/march', (req, res) => {
  res.render('index', {data: march});
});

module.exports = router;
