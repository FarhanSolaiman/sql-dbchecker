var express = require('express');
var router = express.Router();
var ctrlSQL = require('../controllers/sql.controller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/mssql', ctrlSQL.asyncGetMSSQLData);

module.exports = router;
