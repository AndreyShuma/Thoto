const express = require('express');
const multer = require('multer');
const path = require('path');
const controller = require('../controller/controller.js');
const sessionCtr = require('../controller/session.js');

const router = express.Router();

// створюємо шлях до файлів мультера
const linkMulter = path.join(__dirname + '/../public/uploads/');

// запускаємо мультер
const upload = multer({ dest: linkMulter });

router.get('/',  (req, res) => {
    req.session.userIDTest = 1;
    res.render('index');
});

router.post('/data', upload.none(), async (req, res) => {
    // console.log('req ROUTER>>', req.body);
    await controller.create(req.body);
    res.json({status: 'ok'});
});

router.get('/test1', async (req, res) => {
    req.session.userID = 1;
    console.log('req.session >>>>', req.session.userID);
     await sessionCtr.create(req.session.userID);
     const result = await sessionCtr.findDB();
    // console.log('result router>>>>>>', result);
    res.json({status: 'ok', userID: req.session.userID, result: result});
});

router.get('/test2',  (req, res) => {
    req.session.userID = req.session.userID + 1;
    console.log('req.session >>>>test2', req.session.userID);
    res.json({status: 'ok', userID: req.session.userID});
});

// Middleware 1
const logRequest = (req, res, next) => {
    console.log('Middleware 1, next()');
    next();
  };
  
  // Middleware 2
  const authenticateUser = (req, res, next) => {
    if (req.headers.authorization === 'secret-token') {
      console.log('Middleware 2, next()');
    //   next();
    } else {
    //   res.status(401).send('res.status(401)');
      console.log('Middleware 2, next()');
      next();
    }
  };
  
  // Middleware 3
  const handleRequest = (req, res) => {
    console.log('handleRequest>>>>>>>');
    res.send('Middleware 3');
  };
  
  // Додавання middleware до маршруту
//   router.get('/api/data', logRequest, authenticateUser, handleRequest);

  router.get('/api/data', 
  (req, res, next) => {
    console.log('Middleware 1, next()');
    next();
  }, 

  (req, res, next) => {
    if (req.headers.authorization === 'secret-token') {
      console.log('Middleware 2, next()');
    //   next();
    } else {
    //   res.status(401).send('res.status(401)');
      console.log('Middleware 2, next()');
      next();
    }
  },
  (req, res) => {
    console.log('handleRequest>>>>>>>');
    res.send('Middleware 310');
  }
  );


module.exports = router;