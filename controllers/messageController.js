const messageModel = require('../db/queries.js');

const messageParse = async (req, res, next) => {
  const idx = req.params.idx;
  const message = await messageModel.getMessageById(idx)

  if(!message) return res.status(404).send('Message not found!');
	
  res.render('message', {
    message: message[0],
  })
}

module.exports = { messageParse };
