const express = require('express');
const multer = require('multer');
const path = require('path');
const controller = require('../controller/controller.js');

const router = express.Router();

// створюємо шлях до файлів мультера
const linkMulter = path.join(__dirname + '/../public/uploads/');

// запускаємо мультер
const upload = multer({ dest: linkMulter });

router.get('/',  (req, res) => {
    res.render('index');
});

router.post('/data', upload.none(), async (req, res) => {
    // console.log('req ROUTER>>', req.body);
    await controller.create(req.body);
    res.json({status: 'ok'});
});

module.exports = router;