import { PATH_LANDING } from 'src/data';
import { Text, Anchor, Space } from 'features/ui';

function NotFound() {
  return (
    <div>
      <Anchor href={PATH_LANDING} style={{ width: 'max-content' }} color="secondary">Back to the homepage</Anchor>
      <Space size={32}/>
      <Text fontSize={2} style={{ color: 'red', textAlign: 'center' }}>404 Page Not Found</Text>
    </div>
  );
}

export default NotFound;