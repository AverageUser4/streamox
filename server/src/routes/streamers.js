const express = require('express');
const router = express.Router();
const Streamer = require('../models/Streamer');

router.get('/', async (req, res) => {
  try {
    const streamers = await Streamer.find().sort({ createdAt: -1 });
    res.json(streamers);
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamers data from database. Please try again later.' });
  }
});

router.post('/', async (req, res) => {
  const { name, platform , description, imageSrc } = req.body;
  
  try {
    const streamer = Streamer({ name, platform, description, imageSrc });
    await streamer.save();
    res.status(201).json(streamer);
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to add the streamer to database. Please try again later.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const streamer = await Streamer.findById(req.params.id);
    if(!streamer) {
      res.json({ error: 'User with given ID does not exist!' });
      return;
    } else {
      res.json(streamer);
      return;
    }
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamer data from database.' });
  }
});

router.put('/:id/vote', async (req, res) => {
  try {
    console.log(req.cookies);
    const { user } = req.cookies;
    const vote = Number(req.body.vote);
    if(!user) {
      res.json({ error: 'Could not verify user trying to vote. Make sure the "user" cookie is set.' });
    }
    if(!vote) {
      res.json({ error: 'Number indicating whether vote was negative (-1) or positive (1) was not set in request body.' });
    }

    const streamer = await Streamer.findById(req.params.id);
    if(!streamer) {
      res.json({ error: 'User with given ID does not exist!' });
      return;
    } else {
      const currentVoteIndex = streamer.votes.findIndex(vote => vote.id === user);
      const currentVote = streamer.votes[currentVoteIndex];
      if(!currentVote) {
        streamer.votes.push({ id: user, vote });
      } else {
        if(currentVote.vote === vote) {
          streamer.votes.splice(currentVoteIndex, 1);
        } else {
          streamer.votes[currentVoteIndex].vote *= -1;
        }
      }
      await streamer.save();
      res.status(201).end();
      return;
    }
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamer data from database or trying to update database.' });
  }
});

module.exports = router;

// POST /streamers: An endpoint to receive new streamer submissions from the frontend and store them in a database.
// GET /streamers: An endpoint to return all the stored streamer submissions in response to a request from the frontend.
// GET /streamers/[streamerId]: An endpoint to return data about a specific streamer.
// PUT /streamers/[streamerId]/vote: An endpoint to receive an upvote for a specific streamer and update their current upvote/downvote count.