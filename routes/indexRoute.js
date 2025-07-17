const { Router } = require('express');
const indexRouter = Router();

const { indexParse } = require('../controllers/indexController.js');

indexRouter.get('/', indexParse);

module.exports = indexRouter;