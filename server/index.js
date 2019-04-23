import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
const path = require('path');
var cors = require('cors');

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

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server is runnig on port ${PORT}`)
);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);