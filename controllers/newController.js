const messageModel = require('../db/queries.js');

const newParse = async (req, res) => {
  res.render('new');
}

const newMessage= [
  async (req, res) => {
    await messageModel.insertMessage(req.body.username, req.body.messagetext);
    res.redirect('/');
  }
]

module.exports = { newParse, newMessage };
