const { PORT } = require('../data/index');
const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
  platform: { 
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
    minLength: 1,
    maxLength: 250,
  },
  votes: {
    type: [],
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  imageSrc: { 
    type: String,
    required: true,
    default: `http://localhost:${process.env.PORT || 3000}/streamer.png`,
  },
});

module.exports = mongoose.model('Streamer', streamerSchema);