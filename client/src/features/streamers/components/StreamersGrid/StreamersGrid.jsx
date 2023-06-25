import css from './StreamersGrid.module.css';
import { StreamerCard } from 'features/streamers';
import { Grid } from 'features/ui';

function StreamersGrid() {
  const streamers = [];
  for(let i = 0; i < 15; i++) {
    streamers.push(
      <StreamerCard 
        key={i}
        name="adam" 
        href="abc"
        desc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the".slice(0, Math.floor(Math.random() * 300))} 
      />
    );
  }
  
  return (
    <Grid>
      {streamers}
    </Grid>
  );
}

export { StreamersGrid };