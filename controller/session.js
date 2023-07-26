const  session = require('../model/session');

const create = async (data) => {
    // console.log('data model>>>>>', data);
 await session.createDB(data);
};

const findDB = async () => {
    return await session.findDB();
};

module.exports.create = create;
module.exports.findDB = findDB;