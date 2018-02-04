const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur');
const History = require('../models/history');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.get('/imagesearch/:query', (req, res) => {
  imgur.getImage(req.params.query, req.query.offset).then(ans => {
    new History({ term: req.params.query}).save();
    res.json(ans)
  })
});

router.get('/latest', (req, res) => {
  History.find({}, 'term when -_id').sort('-when').limit(10).then(results => {
    res.json(results)
  })
});

module.exports = router; 