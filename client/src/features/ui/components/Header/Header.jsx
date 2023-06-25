import css from './Header.module.css';
import { Logo, Anchor } from "features/ui";

function Header() {
  return (
    <header className={css['header']}>
      <div className={css['content']}>
        <Logo/>

        <nav className={css['nav']}>
          <Anchor href="/streamers/list">Streamers</Anchor>
        </nav>
      </div>
    </header>
  );
}

export { Header };