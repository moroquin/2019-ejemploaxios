//imports 

const express = require ('express');
const app = express();

//configuración 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
app.set('port', 3000);

//rutas
app.get('/',(req,res) => {
    res.render('index',{max:15});
});

app.get('/hola',(req,res) => {
    res.sendFile(__dirname+'/views/saludo.html');
});

//escucha
app.listen(app.get('port'), ()=>{
    console.log(__dirname);
    console.log('escuchando en el puerto ',app.get('port') );
});

