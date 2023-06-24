import PropTypes from 'prop-types';
import css from './Card.module.css';
import placeholderSrc from '../../assets/images/placeholder.jpg';
import Text from '../Text/Text';
import Anchor from '../Anchor/Anchor';

function Card({ href, imageSrc, name, desc }) {
  return (
    <div className={css['card']}>
      <img className={css['image']} src={imageSrc || placeholderSrc}/>
      <div className={css['content']}>
        <Text element="h3" color={3} style={{ marginBottom: 12 }}>{name}</Text>
        <Text style={{ marginBottom: 16 }} className={css['desc']} element="p" variant="p" fontSize={-2}>{desc}</Text>
        
        {href && <Anchor style={{ marginLeft: 'auto', width: 'max-content', fontSize: '14px' }} color={1} href={href}>See more</Anchor>}
        
      </div>
    </div>
  );
}

Card.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;