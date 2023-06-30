const webHttp = require('./runners/webHttp');
const mongodb = require('./runners/mongoDB');

const init = async () => {
    try {
      await mongodb();

    } catch (err) {
      console.log('ERROOR >>>>>>', err);
    }
  }
  init();

