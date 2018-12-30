var express = require('express');
var router = express.Router();

router.get('/projects', function(req, res) {
  res.render('projects');
//   res.send('respond with a resource');
});

module.exports = router;