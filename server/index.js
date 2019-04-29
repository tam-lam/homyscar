import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import auth from './src/auth'



const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const app = express();
const PORT = 3001;


app.use(cors())

// mongoose connection 
try {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb+srv://dbUser:teamzero@cluster0-hckqo.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
  });
}
catch (err) { 
  console.log(err)
}

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookieParser setup
app.use(cookieParser());

app.use(session({
  secret: 'very secret 12345',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

app.use(auth.initialize);
app.use(auth.session);
app.use(auth.setUser);

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server is runnig on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);