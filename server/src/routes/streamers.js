const express = require('express');
const router = express.Router();
const Streamer = require('../models/Streamer');

function extendStreamer(streamer, user) {
  streamer = JSON.parse(JSON.stringify(streamer));
  const { votes } = streamer;
  delete streamer.votes;
  const userVote = votes.find(vote => vote.id === user);

  streamer.upvotesCount = votes.filter(vote => vote.vote === 1).length;
  streamer.downvotesCount = votes.filter(vote => vote.vote === -1).length;
  streamer.userVote = userVote?.vote || 0;
  
  return streamer;
}

router.get('/', async (req, res) => {
  try {
    let streamers = await Streamer.find().sort({ createdAt: -1 });
    streamers = streamers.map((streamer) => extendStreamer(streamer, req.cookies.user));
    res.json(streamers);
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamers data from database. Please try again later.' });
  }
});

router.post('/', async (req, res) => {
  let { name, platform , description, imageSrc } = req.body;
  
  try {
    const streamer = Streamer({ name, platform, description, imageSrc });
    await streamer.save();
    res.status(201).json(extendStreamer(streamer, req.cookies.user));
  } catch(error) {
    console.error(error);
    res.json({ error: error.name === 'ValidationError' ? error.message : 'Error trying to add the streamer to database. Please try again later.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const streamer = await Streamer.findById(req.params.id);
    if(!streamer) {
      res.json({ error: 'User with given ID does not exist!' });
      return;
    } else {
      res.json(extendStreamer(streamer, req.cookies.user));
      return;
    }
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamer data from database.' });
  }
});

router.put('/:id/vote', async (req, res) => {
  try {
    const { user } = req.cookies;
    const vote = Number(req.body.vote);
    if(!user) {
      res.json({ error: 'Could not verify user trying to vote. Make sure the "user" cookie is set.' });
      return;
    }
    if(vote !== 1 && vote !== 0 && vote !== -1) {
      res.json({ error: `Number indicating whether vote was negative (-1), positive (1) or should be removed (0) did not have correct value. Received: "${req.body.vote}".` });
      return;
    }

    const streamer = await Streamer.findById(req.params.id);
    if(!streamer) {
      res.json({ error: 'Streamer with given ID does not exist!' });
      return;
    } else {
      const currentVoteIndex = streamer.votes.findIndex(vote => vote.id === user);
      
      if(currentVoteIndex !== -1) {
        if(vote === 0) {
          streamer.votes.splice(currentVoteIndex, 1);
        } else {
          streamer.votes[currentVoteIndex] = { id: user, vote };
        }
      } else if(vote !== 0) {
        streamer.votes.push({ id: user, vote });
      }

      await streamer.save();
      res.status(201).end();
    }
  } catch(error) {
    console.error(error);
    res.json({ error: 'Error trying to read streamer data from database or trying to update database.' });
  }
});

module.exports = router;