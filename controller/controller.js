const model = require('../model/model.js');

const create = async (dataRouter) => {
    // console.log('data CONTROLLER >>>', dataRouter);
    const data = {
        sizeFormat : dataRouter.group,
        nameUser : dataRouter.nameUser,
        telethonUser : dataRouter.telethonUser,
        emailUser : dataRouter.email
    };

    // console.log('data CONTROLLER>>>', data);
    await model.create(data);
};

module.exports.create = create;