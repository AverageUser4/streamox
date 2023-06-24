import css from './Footer.module.css';
import Text from '../Text/Text';

function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={css['content']}>
        <Text color={6} fontSize={-2}>Streamox Corporations &copy; 2023</Text>
      </div>
    </footer>
  );
}

export default Footer;