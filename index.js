import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is runnng');
});

app.listen(3000, () => {
  console.log('Express server initialized');
});