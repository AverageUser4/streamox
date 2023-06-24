import css from './Header.module.css';
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['content']}>
        <Logo/>

        <Link to="/streamers/list">Streamers</Link>
      </div>
    </header>
  );
}

export default Header;