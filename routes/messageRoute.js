const { Router } = require('express');
const messageRouter = Router();

const { messageParse } = require('../controllers/messageController');

messageRouter.get('/:idx' , messageParse);

module.exports =  messageRouter;