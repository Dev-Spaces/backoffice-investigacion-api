const mongoose = require('mongoose')

const urlDB ='mongodb+srv://Sebastian:sebastian123456@dvspace.8yyfo.mongodb.net/DevSpace?retryWrites=true&w=majority'
mongoose.connect(urlDB);
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("conectado a la bd")
})