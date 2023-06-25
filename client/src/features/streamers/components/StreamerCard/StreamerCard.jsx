import PropTypes from 'prop-types';
import css from './StreamerCard.module.css';
import { Text } from 'features/ui';
import { Anchor } from 'features/ui';
import { Card } from 'features/ui';
import { Space } from 'features/ui';
import { StreamerVotes } from 'features/streamers';
import streamerSrc from 'assets/images/streamer.png';
import { limitText } from 'utils';

function StreamerCard({ href, imageSrc, name, desc }) {
  return (
    <Card imageSrc={imageSrc || streamerSrc}>
      <div className={css['content']}>
        <Text element="h3" color={3} style={{ marginBottom: 12 }}>{name}</Text>
        <Text className={css['desc']} element="p" variant="p" fontSize={-2}>{limitText(desc)}</Text>
        <Space size={24}/>
        <StreamerVotes/>
        <Space size={16}/>
        {
          href && 
            <Anchor 
              style={{ 
                marginLeft: 'auto',
                width: 'max-content',
                fontSize: '14px' 
              }}
              color={1}
              href={href}
            >
              See more
            </Anchor>
        }
      </div>
    </Card>
  );
}

StreamerCard.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export { StreamerCard };