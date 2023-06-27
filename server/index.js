if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { PORT } = require('./src/data/index');

app.use(cors({ origin: process.env.WEBSITE_URL || 'http://localhost:5173', credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cookieParser());
// app.use((req, res, next) => {
//   console.log(new Date(), req.url);
//   next();
// })
app.use((req, res, next) => {
  if(!req.cookies.user) {
    res.cookie('user', Math.random().toString(), { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), sameSite: 'lax' });
  }
  next();
});

app.use('/streamers', require('./src/routes/streamers'));
app.use((req, res) => {
  res.json({ error: 'Not found.' });
});

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Successuflly connected to database at: ', process.env.DATABASE_URL))
  .catch(error => console.error('Error connecting to database: ', error));

app.listen(PORT, () => console.log(`Server started at: http://127.0.0.1:${PORT}`));