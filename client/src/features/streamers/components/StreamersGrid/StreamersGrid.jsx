import { arrayOfStreamersPT } from 'src/data';
import { StreamerCard } from 'features/streamers';
import { Grid, Message } from 'features/ui';

function StreamersGrid({ streamers }) {
  if(!streamers.length) {
    return <Message type="danger" message="No streamers found!"/>
  }
  
  return (
    <Grid>
      {streamers.map(streamer => 
        <StreamerCard 
          key={streamer._id}
          streamer={streamer}
        />
      )}
    </Grid>
  );
}

StreamersGrid.propTypes = {
  streamers: arrayOfStreamersPT,
};

export { StreamersGrid };