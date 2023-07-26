const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema({
    userId:{type: Number},
    // sessioId:{ type: String},
    Date: {type : Date, default : Date.now()}
});

const session = mongoose.model('session', schema);

//створенння нового запису в базі даних
const createDB = async (datactr) => {
    const data = {
        userId:datactr
    };
    // console.log('Run session model>>>', data);
    await session.create(data);
};

// пошук всіх записів в базі даних
const findDB = async () => {
    const result = await session.find();
    // console.log('result model>>>>>', result);
    return result
};


module.exports.createDB = createDB;
module.exports.findDB = findDB;