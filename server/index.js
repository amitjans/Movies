const express = require('express');
const morgan = require('morgan');
const ejs = require("ejs");
const app = express();

const { mongoose } = require('./database');

//Configuracion
app.set('port', process.env.PORT || 3000);
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas 
app.get('/', function(req, res) {
  res.render('../views/index.html');
});
app.use('/api/actor', require('./routes/actor.routes'));
app.use('/api/categoria', require('./routes/categoria.routes'));
app.use('/api/director', require('./routes/director.routes'));
app.use('/api/genero', require('./routes/genero.routes'));
app.use('/api/pelicula', require('./routes/pelicula.routes'));

//Servidor
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})