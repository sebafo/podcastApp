var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  try {
    const response = await fetch('http://localhost:3000/items');
    const items = await response.json();

    res.render('index', { items });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
