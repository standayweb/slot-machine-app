import express from 'express';
import path from 'path';
import http from 'http';

const app = express();
const server = http.Server(app);

app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
