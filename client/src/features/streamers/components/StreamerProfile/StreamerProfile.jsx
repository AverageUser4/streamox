import { Text } from 'features/ui';
import { ProfilePicture } from 'features/ui';
import css from './StreamerProfile.module.css';
import { StreamerVotes } from 'features/streamers';
import { Space, Loading, Message } from 'features/ui';
import { useFetch } from 'src/hooks';
import { API_SINGLE_STREAMER_WILDCARD } from 'src/data';
import { resolveWildcards } from 'src/utils';
import { useParams } from 'react-router-dom';

function StreamerProfile() {
  const { id } = useParams();
  const { isError, isFetching, data: streamer } = useFetch(resolveWildcards(API_SINGLE_STREAMER_WILDCARD, id));

  if(isFetching) {
    return <Loading/>
  }
  if(isError) {
    return <Message type="danger" message={"Something went wrong. Please try again later."}/>
  }

  if(streamer.error) {
    return (
      <article className={css['container']}>
        <Message type="danger" message={"Streamer not found!"}/>
      </article>
    )
  }
  
  const { imageSrc, name, description, platform } = streamer;
  
  return (
    <article className={css['container']}>
      <ProfilePicture 
        className={css['image']}
        src={imageSrc}
      />
      
      <div>
        <Text 
          element="h2"
          variant="h"
          fontSize={1}
        >
          {name} ({platform})
        </Text>

        <Text
          element="p"
          variant="p"
          fontSize={-1}
        >
          {description}
        </Text>

        <Space size={16}/>

        <StreamerVotes streamer={streamer}/>
      </div>
    </article>
  );
}

export { StreamerProfile };