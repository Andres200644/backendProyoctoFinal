const express = require('express');
const app = express();
const port = 8080;
const exphbs = require('express-handlebars');
const indexRouter = require('./src/routes/index');
const productsRouter = require('./src/routes/products');
const cartsRouter = require('./src/routes/carts');

// Configuración de Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Rutas
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/carts', cartsRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
