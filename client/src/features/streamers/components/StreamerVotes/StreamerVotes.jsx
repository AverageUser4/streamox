import css from './StreamerVotes.module.css';
import { streamerPT } from 'src/data';
import { Button } from 'features/ui';
import { ReactComponent as UpVoteSVG } from 'assets/icons/upvote.svg';
import { ReactComponent as DownVoteSVG } from 'assets/icons/downvote.svg';
import { API_VOTE_WILDCARD } from 'src/data';
import { resolveWildcards, debounce } from 'src/utils';
import { useState, useRef } from 'react';

function StreamerVotes({ streamer }) {
  let { upvotesCount, downvotesCount, userVote } = streamer;
  
  const [chosenVote, setChosenVote] = useState(userVote);
  const debounceRef = useRef(debounce((vote) => {
    const url = resolveWildcards(API_VOTE_WILDCARD, streamer._id);
    const body = new URLSearchParams();
    body.append('vote', vote);

    async function sendVote() {
      try {
        const response = await fetch(url, { credentials: 'include', method: 'PUT', body });
        let json;
        if(response.status !== 201) {
          json = await response.json();
          throw json.error;
        }
      } catch(error) {
        console.error(error);
      }
    }

    sendVote();
  }, 300));

  if(userVote === 1) {
    upvotesCount--;
  }
  if(userVote === -1) {
    downvotesCount--;
  }
  if(chosenVote === 1) {
    upvotesCount++;
  }
  if(chosenVote === -1) {
    downvotesCount++;
  }

  function onClick(event) {
    let newChosenVote = Number(event.currentTarget.name);
    
    if(chosenVote === newChosenVote) {
      newChosenVote = 0;
    }

    setChosenVote(newChosenVote);
    debounceRef.current(newChosenVote);
  }

  return (
    <div className={css['container']}>
      <Button 
        onClick={(event) => onClick(event)}
        name="1"
        kind="text"
        className={`
          ${css['vote']}
          ${chosenVote === 1 && css['vote--active']}
        `}
      >
        <UpVoteSVG/>
        {upvotesCount}
      </Button>
      
      <Button 
        onClick={(event) => onClick(event)}
        name="-1"
        kind="text"
        className={`
          ${css['vote']}
          ${chosenVote === -1 && css['vote--active']}
        `}
      >
        <DownVoteSVG/>
        {downvotesCount}
      </Button>
    </div>
  );
}

StreamerVotes.propTypes = {
  streamer: streamerPT,
};

export { StreamerVotes };