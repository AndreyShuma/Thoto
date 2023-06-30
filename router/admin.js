const express = require('express');
const controllerAdmin = require('../controller/controllerAdmin');

const router = express.Router();

router.get('/', async (req, res) => {
    res.render('admin')
});

router.post('/index', async (req, res) => {
    
    const data = await controllerAdmin.find();
    // console.log('Запускаємо роут ADMINA data >>>>', data);
    res.json(data);
})

module.exports = router;