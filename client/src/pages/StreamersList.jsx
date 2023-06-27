import { SubmitStreamerForm, StreamersGrid } from 'features/streamers';
import { Space, Text, Loading, ErrorMessage } from 'features/ui';
import { useFetch } from 'hooks/';
import { API_STREAMERS_LIST } from 'data/';
import { useEffect, useState } from 'react';

function StreamersList() {
  const { isError, isFetching, data } = useFetch(API_STREAMERS_LIST);
  const [streamers, setStreamers] = useState(data);

  useEffect(() => {
    setStreamers(data);
  }, [data]);

  if(isFetching) {
    return <Loading/>
  }
  if(isError) {
    return <ErrorMessage message={"Something went wrong. Please try again later."}/>
  }

  return (
    <div>
      <Text 
        element="h1"
        variant="h"
        fontSize={3}
        style={{ textAlign: 'center' }}
      >
        Streamers
      </Text>
      <Space size={48}/>
      <SubmitStreamerForm successCallback={(streamer) => setStreamers(prev => [streamer, ...prev])}/>
      <Space/>
      {streamers && <StreamersGrid streamers={streamers}/>}
    </div>
  );
}

export default StreamersList;