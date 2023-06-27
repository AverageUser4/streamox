import { Anchor } from 'features/ui';
import { StreamerProfile } from 'features/streamers';
import { Space } from 'features/ui';
import { PATH_STREAMERS_LIST } from 'data/';

function SingleStreamerPage() {
  return (
    <div>
      <Anchor href={PATH_STREAMERS_LIST} style={{ width: 'max-content' }} color={1}>Back to streamers list</Anchor>
      <Space size={32}/>
      <StreamerProfile/>
    </div>
  );
}

export default SingleStreamerPage;