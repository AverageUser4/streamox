import css from './StreamerCard.module.css';
import { Text } from 'features/ui';
import { Anchor } from 'features/ui';
import { Card } from 'features/ui';
import { Space } from 'features/ui';
import { StreamerVotes } from 'features/streamers';
import placeholderSrc from 'assets/images/placeholder.jpg';
import { limitText } from 'utils';
import { PATH_SINGLE_STREAMER_PAGE_WILDCARD, streamerPT } from 'data/';
import { resolveWildcards } from 'utils/';

function StreamerCard({ _id, name, description, imageSrc, platform, votes }) {
  return (
    <Card imageSrc={imageSrc || placeholderSrc}>
      <div className={css['content']}>
        <Text element="h3" color={3} style={{ marginBottom: 12 }}>{name} ({platform})</Text>
        <Text className={css['desc']} element="p" variant="p" fontSize={-2}>{limitText(description)}</Text>
        <Space size={24}/>
        <StreamerVotes 
          _id={_id}
          name={name}
          description={description}
          imageSrc={imageSrc}
          platform={platform}
          votes={votes}
        />
        <Space size={16}/>
        <Anchor
          style={{ 
            marginLeft: 'auto',
            width: 'max-content',
            fontSize: '14px' 
          }}
          color={1}
          href={resolveWildcards(PATH_SINGLE_STREAMER_PAGE_WILDCARD, _id)}
        >
          See more
        </Anchor>
      </div>
    </Card>
  );
}

StreamerCard.propTypes = {
  ...streamerPT,
};

export { StreamerCard };