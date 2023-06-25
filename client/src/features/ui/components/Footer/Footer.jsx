import css from './Footer.module.css';
import { Text } from 'features/ui';

function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={css['content']}>
        <Text color={6} fontSize={-2}>Streamox Corporations &copy; 2023</Text>
      </div>
    </footer>
  );
}

export { Footer };