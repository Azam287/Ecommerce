const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
// const MongoDbClient = require('mongodb').MongoClient;
const config = require('./config');
// const { MongoClient } = require('mongodb');

const app = express();


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err, client) => {
    if(err){ 
        console.log(err)
        return ;
    }

    console.log('Connected to mongodb')
});

app.listen(config.PORT || 3000, () => {
    console.log(`Server is Listening to ${config.PORT || 3000}`)
})

require('./src/routes')(app);