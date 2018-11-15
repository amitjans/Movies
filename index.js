const express = require('express');
const morgan = require('morgan');
const ejs = require("ejs");
const app = express();
var path = require('path');

const { mongoose } = require('./server/database');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.get('/', function(req, res) {
  res.render('index');
});
app.use('/api/actores', require('./server/routes/actor.routes'));
app.use('/api/categorias', require('./server/routes/categoria.routes'));
app.use('/api/directores', require('./server/routes/director.routes'));
app.use('/api/generos', require('./server/routes/genero.routes'));
app.use('/api/nacionalidades', require('./server/routes/nacionalidad.routes'));
app.use('/api/paises', require('./server/routes/pais.routes'));
app.use('/api/peliculas', require('./server/routes/pelicula.routes'));
app.use('/api/usuario', require('./server/routes/usuario.routes'));

//Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})