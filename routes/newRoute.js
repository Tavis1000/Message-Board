const { Router } = require('express');
const newRouter = Router();

const { newParse, newMessage } = require('../controllers/newController');

newRouter.get('/' , newParse);
newRouter.post('/' , newMessage);

module.exports =  newRouter;