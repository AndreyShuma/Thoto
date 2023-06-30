
const app = require('../../servers/httpServer.js');

const init = async () => {

    try {
        await app;
    } catch (error) {
        console.error('Помилка при запуску сервера:', error);
    }
};

init();


module.exports = init;