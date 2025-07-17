const express = require('express');
const app = express();

const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const indexRouter = require('./routes/indexRoute');
const newRouter = require('./routes/newRoute');
const messageRouter = require('./routes/messageRoute');

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening on port 3000");
})