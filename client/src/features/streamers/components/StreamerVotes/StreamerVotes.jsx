import css from './StreamerVotes.module.css';
import { Button } from 'features/ui';
import { ReactComponent as UpVoteSVG } from 'assets/icons/upvote.svg';
import { ReactComponent as DownVoteSVG } from 'assets/icons/downvote.svg';

function StreamerVotes() {
  return (
    <div className={css['container']}>
      <Button kind="text">
        <UpVoteSVG/>
        100
      </Button>
      
      <Button kind="text">
        <DownVoteSVG/>
        20
      </Button>
    </div>
  );
}

export { StreamerVotes };