import SubmitStreamerForm from '../components/SubmitStreamerForm/SubmitStreamerForm';
import StreamersGrid from '../components/StreamersGrid/StreamersGrid';
import Space from '../components/Space/Space';
import Text from '../components/Text/Text';

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

export default StreamersList;