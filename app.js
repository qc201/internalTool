const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/topicDB");
const itemsSchema = { name: String };
const Item = mongoose.model("Item", itemsSchema);


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/new', (req, res) => {
    res.render('new')
});





















app.listen(3000, function() {
    console.log("Server started on port 3000");
});