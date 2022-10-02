var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add-name', async (req, res) => {
    res.send(' here you can add any user ')
});

module.exports = router;
