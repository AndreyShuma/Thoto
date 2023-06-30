const express =require('express');
const path = require('path');
const mainRouter = require('../router/main');
const adminRouter = require('../router/admin');

const app = express();
console.log('Server start >>>>>');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
app.use(express.static(path.join(__dirname, '../public')));

app.use('/main', mainRouter);
app.use('/admin', adminRouter);


app.listen(3000, () => {
    console.log('Сервер запущений на порту 3000');
  });

module.exports = app;

