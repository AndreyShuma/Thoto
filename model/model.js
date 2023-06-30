const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema ({
    sizeFormat : {type : String},
    nameUser : {type : String},
    telethonUser : {type : String},
    emailUser : {type : String},
    date: {type: Date, default: Date.now()}
});

const bd = mongoose.model('userFoto', schema);


const create = async (dataController) => {
    console.log('data MODEL MongoDB >>>', dataController);
    bd.create(dataController);
};

module.exports.create = create;