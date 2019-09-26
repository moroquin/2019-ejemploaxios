const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

//utilizaremos router para las rutas ya no app
router.get('/', (req, res) => {
    res.render('index', { max: 15 });
});

router.get('/totito', (req, res) => {
    res.render('totito', { max: 15 });
});

router.get('/postdata', (req, res) => {
    console.log("recibio");
    let data = req.query.format;
    console.log(data);


});

router.post('/postusers', (req, res) => {
    console.log("recibo usuario");
    console.log(req);
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.text);


    res.status(400).send('wrong');
});

router.get('/users', (req, res) => {
    console.log("envio usuario");

    setTimeout(() => {
        res.status(400).json({
            usurio: 'oliver',
            id: '4',
            carne: '202'
        });
    }, 4500);
    /*
        setTimeout(() => {
            res.status(200).json({ usuario: 'oliver sierra' });
        }, 3500);*/
});

router.get('/hola', (req, res) => {
    res.render('saludo', { max: 15 });
    //res.sendFile(path.join(__dirname,'/views/saludo.html'));
    //res.sendFile(path.join(__dirname,'../views/saludo.html'));
});

module.exports = router;