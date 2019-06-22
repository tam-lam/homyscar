// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import routes from './src/routes/crmRoutes';
// import cookieParser from 'cookie-parser';
// import session from 'express-session';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {routes} = require('./src/routes/crmRoutes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');


const config = require('config');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const db = config.get('mongoURI');

app.use(cors())

// mongoose connection 
try {
  mongoose.Promise = global.Promise;
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
}
catch (err) { 
  console.log(err)
}

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookieParser setu
app.use(cookieParser());

app.use(session({
  secret: 'very secret 12345',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

app.use('/getUser', require('./src/routes/getUserDetails'));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('../build'));

  app.get('*' , (req , res) => {
      res.sendFile(path.resolve(__dirname , '..' , '..' , 'build' , 'index.html'))
  });
}

routes(app);


app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);