const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const BuildFile = require('./routes/BuildFile');

const app = express();
const PORT = process.env.PORT || 4000;

// mount morgan, morgan is a logger that logs web traffic
// it gives 5 options as parameters
app.use(morgan('dev'));
// here we tell node to use the public files
app.use(express.static(path.join(__dirname, '/public/')));
// importat! /css not css give it a slash
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// popper is inside umd careful
app.use('/js', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mount routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use('/download', BuildFile);


app.listen(PORT, () => {
    // logs as debugger in debugger mode, notice that the start script is in debug mode
    // so if I run the app in normal mode I wont get any messages
    // express uses debug too so use it only on app to log less
    debug(`listening on port ${chalk.yellow(PORT)}`);
});
