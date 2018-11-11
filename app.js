const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
// every thing in express works trough app

// mount morgan morgan is a logger that logs web traffic
// it gives 5 options as parameters
app.use(morgan('dev'));
// here we tell node to use the public files also called static files
app.use(express.static(path.join(__dirname, '/public/')));
// importat! /css not css give it a slash
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
// popper is inside umd careful
app.use('/js', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')));

app.get('/download', (req, res) => {
    const file = `${__dirname}/views/index.html`;
    res.download(file); // Set disposition and send it.
});


const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    // __dirname is the location of the current executable app.js
    // we use the package path to take care of the path to files and folders
    // path is built in no npm
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(PORT, () => {
    // logs as debugger in debugger mode, notice that the start script is in debug mode
    // so if I run the app in normal mode I wont get any messages
    // express uses debug too so use it only on app to log less
    debug(`listening on port ${chalk.yellow(PORT)}`);
});
