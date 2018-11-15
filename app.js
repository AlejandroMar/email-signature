const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');


const indexRoute = require('./routes/indexRoute');
const clientsRoute = require('./routes/clientsRoute');
const downloadFile = require('./routes/downloadFile');


const app = express();
const PORT = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/clientSignatures')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


app.engine('handlebars', exphbs({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public/')));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use('/js', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')));
// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mount routes
app.use('/', indexRoute);
app.use('/clients', clientsRoute);
app.use('/download', downloadFile);


app.listen(PORT, () => {
    console.log(`listening on port ${chalk.yellow(PORT)}`);
});
