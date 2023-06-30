const mongoose = require('mongoose');
const run = async ()=> {

    await mongoose.connect('mongodb://127.0.0.1/Foto');
    

} 

module.exports = run;