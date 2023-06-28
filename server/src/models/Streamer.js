const { PORT } = require('../data/index');
const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
    trim: true,
  },
  platform: { 
    type: String,
    required: true,
    enum: ['Twitch', 'YouTube', 'TikTok', 'Kick', 'Rumble'],
  },
  description: { 
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1500,
    trim: true,
  },
  votes: {
    type: [{
      id: {
        type: String,
        required: true,
      },
      vote: {
        type: Number,
        required: true,
        enum: [-1, 1],
      },
    }],
    required: true,
    default: [],
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  imageSrc: { 
    type: String,
    required: true,
    default: `http://localhost:${PORT}/streamer.png`,
    trim: true,
  },
});

module.exports = mongoose.model('Streamer', streamerSchema);