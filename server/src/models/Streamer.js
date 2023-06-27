const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
  },
  platform: { 
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
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
    default: 'http://localhost:3000/streamer.png',
  },
});

module.exports = mongoose.model('Streamer', streamerSchema);