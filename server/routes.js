import express from 'express';
import path from 'path';

const app = module.exports = express.Router();

function getIndexPath() {
  return path.resolve(__dirname, 'index.html');
}

app.get('/*', (req, res) => {
  res.sendFile(getIndexPath());
});
