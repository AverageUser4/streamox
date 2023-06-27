import css from './StreamerVotes.module.css';
import { streamerPT } from 'src/data';
import { Button } from 'features/ui';
import { ReactComponent as UpVoteSVG } from 'assets/icons/upvote.svg';
import { ReactComponent as DownVoteSVG } from 'assets/icons/downvote.svg';
import { useAuthContext } from 'features/auth';
import { API_VOTE } from 'src/data';
import { resolveWildcards } from 'src/utils';
import { useEffect, useState } from 'react';

function StreamerVotes({ votes }) {
  const [chosenVote, setChosenVote] = useState(null);
  const { user } = useAuthContext();
  const userVote = votes?.find(vote => vote.id);
  let upVotesCount = votes?.filter(vote => vote.vote === 1).length;
  let downVotesCount = votes?.filter(vote => vote.vote === -1).length;
  if(userVote?.vote === 1) {
    upVotesCount--;
  }
  if(userVote?.vote === -1) {
    downVotesCount--;
  }
  if(chosenVote === 1) {
    upVotesCount++;
  }
  if(chosenVote === -1) {
    downVotesCount++;
  }

  useEffect(() => {
    if(userVote) {
      setChosenVote(userVote.vote);
    }
  }, [userVote]);

  function onClick(event) {
    const newChosenVote = Number(event.currentTarget.name);
    if(chosenVote !== newChosenVote) {
      setChosenVote(newChosenVote);
    } else {
      setChosenVote(null);
    }
  }

  if(!votes) {
    return <div>Loading....</div>;
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
        {upVotesCount}
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
        {downVotesCount}
      </Button>
    </div>
  );
}

StreamerVotes.propTypes = {
  ...streamerPT,
};

export { StreamerVotes };