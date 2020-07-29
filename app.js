const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', function(req, res) {
    res.send('Hello World!');
});


app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

});

//cuando la url cambie a localhost:3000/nosotros me renderiza/muestra/pinta el sobrenostros.html
app.get('/nosotros', function(req, res) {
    res.sendFile(path.join(__dirname + '/sobreNosotros.html'));
});
app.get('/ejemplo', function(req, res) {
    res.send('ejemplo')
});
//:marca es una variable
app.get('/card/:marca', function(req, res) {


    console.log(req.params)


    res.send('Hello Card!');
});

// % ? -- $ 
app.get('/colores/%:color1/?:color2', function(req, res) {


    console.log(req.params)


    res.send('Hello Color!');
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});