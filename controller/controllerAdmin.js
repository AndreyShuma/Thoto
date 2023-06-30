const model = require('../model/modelAdmina.js');

const find = async () => {
    // console.log('Запускаємо контроллер Admina >>>');
    return await model.find();
};

module.exports.find = find;