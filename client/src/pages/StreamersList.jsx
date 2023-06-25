import { SubmitStreamerForm } from 'features/streamers';
import { StreamersGrid } from 'features/streamers';
import { Space } from 'features/ui';
import { Text } from 'features/ui';

function StreamersList() {
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
      <StreamersGrid/>
    </div>
  );
}

export { StreamersList };