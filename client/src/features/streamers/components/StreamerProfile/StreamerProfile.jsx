import { Text } from 'features/ui';
import { ProfilePicture } from 'features/ui';
import css from './StreamerProfile.module.css';
import streamerSrc from 'assets/images/streamer.png';
import { StreamerVotes } from 'features/streamers';
import { Space } from 'features/ui';

function StreamerProfile() {
  return (
    <article className={css['container']}>
      <ProfilePicture 
        className={css['image']}
        src={streamerSrc}
      />
      
      <div>
        <Text 
          element="h2"
          variant="h"
          fontSize={1}
        >
          Adam
        </Text>

        <Text
          element="p"
          variant="p"
          fontSize={-1}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Space size={16}/>

        <StreamerVotes/>
      </div>
    </article>
  );
}

export { StreamerProfile };