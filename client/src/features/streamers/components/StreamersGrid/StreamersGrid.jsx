import { arrayOfStreamersPT } from 'src/data';
import { StreamerCard } from 'features/streamers';
import { Grid } from 'features/ui';

function StreamersGrid({ streamers }) {
  return (
    <Grid>
      {streamers.map(streamer => 
        <StreamerCard 
          key={streamer._id}
          {...streamer}
        />
      )}
    </Grid>
  );
}

StreamersGrid.propTypes = {
  streamers: arrayOfStreamersPT,
};

export { StreamersGrid };