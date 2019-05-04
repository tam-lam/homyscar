import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import cookieParser from 'cookie-parser';
import session from 'express-session';
// import auth from './src/auth';


const config = require('config');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();
const PORT = 3001;

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

app.use('/authUser', require('./src/routes/login'));

routes(app);


app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);