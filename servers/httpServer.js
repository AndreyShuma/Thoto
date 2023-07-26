const express =require('express');
const path = require('path');
const mainRouter = require('../router/main');
const adminRouter = require('../router/admin');
const sessionTEST = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
console.log('Server start >>>>>');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//створення доступ до публічної папки
app.use(express.static(path.join(__dirname, '../public')));


//встановлення експресс-сесії
app.set('trust proxy', 1) // trust first proxy
app.use(sessionTEST({
  secret: 'cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/Foto',
    stringfy: false
  }),
  cookie: { secure: false }
}));

app.use('/main', mainRouter);
app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log('Сервер запущений на порту 3000');
  });

module.exports = app;

