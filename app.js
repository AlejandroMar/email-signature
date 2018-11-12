const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

const DownloadFile = require('./routes/DownloadFile');
const IndexRoute = require('./routes/IndexRoute');

const app = express();
const PORT = process.env.PORT || 4000;


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
app.use('/', IndexRoute);

app.use('/download', DownloadFile);


app.listen(PORT, () => {
    // logs as debugger in debugger mode, notice that the start script is in debug mode
    // so if I run the app in normal mode I wont get any messages
    // express uses debug too so use it only on app to log less
    debug(`listening on port ${chalk.yellow(PORT)}`);
});
