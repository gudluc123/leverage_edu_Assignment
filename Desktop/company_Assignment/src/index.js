const express = require('express');
const bodyParser = require('body-parser');
const route = require("./routes/route.js");
const { default: mongoose } = require('mongoose');
const app = express();
const multer = require("multer")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://rahul0542:xp5m0rpm9lxrg5uR@cluster0.rxmel.mongodb.net/rahul?retryWrites=true&w=majority" , {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 8000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 8000))
});