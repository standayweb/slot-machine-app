import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, './assets')));
app.use(routes);

http
  .createServer(app)
  .listen(PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Listening on port ${PORT}.`);
    }
  });
