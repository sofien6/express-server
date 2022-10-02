var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req,res)=>{
  let name = req.query.name
  console.log(' we diiid it with ',name);
  res.send(' hello we did it with  '+req.query.name)
})
module.exports = router;
