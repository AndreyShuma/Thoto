const mongoose = require('mongoose');

const bd = mongoose.model('userFoto');

const find = async () => {
    // console.log('Запускаємо model Admina >>>');
    const data = await bd.find();
    // console.log('data Model Admin>>>', data);
    return data
};

module.exports.find = find;