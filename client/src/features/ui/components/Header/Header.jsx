import css from './Header.module.css';
import { Logo, Anchor } from "features/ui";
import { PATH_STREAMERS_LIST } from 'data/';

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['content']}>
        <Logo/>

        <nav className={css['nav']}>
          <Anchor href={PATH_STREAMERS_LIST}>Streamers</Anchor>
        </nav>
      </div>
    </header>
  );
}

export { Header };