if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(express.static('public'));

app.use('/streamers', require('./src/routes/streamers'));
app.use((req, res) => {
  res.json({ error: 'Not found.' });
});

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Successuflly connected to database at: ', process.env.DATABASE_URL))
  .catch(error => console.error('Error connecting to database: ', error));

app.listen(PORT, () => console.log(`Server started at: http://127.0.0.1:${PORT}`));