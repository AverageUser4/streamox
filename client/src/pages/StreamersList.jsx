import { SubmitStreamerForm } from 'features/streamers';
import { StreamersGrid } from 'features/streamers';
import { Space } from 'features/ui';
import { Text } from 'features/ui';
import { useFetch } from 'hooks/';
import { API_STREAMERS_LIST } from 'data/';

function StreamersList() {
  const { isError, isFetching, data } = useFetch(API_STREAMERS_LIST);

  if(isFetching) {
    return <div>Loading...</div>;
  }
  if(isError) {
    return <div>ERROR!!!!!!</div>;
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
      <SubmitStreamerForm/>
      <Space/>
      {data && <StreamersGrid streamers={data}/>}
    </div>
  );
}

export { StreamersList };