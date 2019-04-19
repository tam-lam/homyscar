import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
var cors = require('cors')

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

app.listen(PORT, () =>
  console.log(`your server is running on port ${PORT}`)
);