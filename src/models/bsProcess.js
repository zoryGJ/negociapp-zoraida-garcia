module.exports = function(){
    const mongoose = require('mongoose')
    const esquema = mongoose.Schema({
            num1: Number,
            num2: Number,
            sum: Number
    }) 
    
    mongoose.connect('mongodb://127.0.0.1:27017/prueba')
    mongoose.set('strictQuery', false)


    return mongoose.model('suma', esquema)
}