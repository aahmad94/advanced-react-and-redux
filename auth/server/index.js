// main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');


// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');
 
// App Setup
// Morgan is a middleware logging framework for incoming requests
app.use(morgan('combined'));
// bodyParser is a middleware used to parse incomin requests as JSON
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);    
