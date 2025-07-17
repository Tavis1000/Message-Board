const messageModel = require('../db/queries.js');

const indexParse = async (req, res) => {
  const messages = await messageModel.getAllMessages();
  
  res.render('index', {
    title: 'Mini Message Board',
    messages
  })
}

module.exports = { indexParse };
