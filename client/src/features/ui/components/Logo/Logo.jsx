import css from './Logo.module.css';
import { ReactComponent as LogoSVG } from 'assets/icons/logo.svg';
import { Text, Anchor } from "features/ui";

function Logo() {
  return (
    <Anchor href="/" className={css['container']} kind="text">
      <LogoSVG className={css['icon']}/>
      <div>
        <Text element="span" fontSize={1}>Streamox</Text>        
        <Text element="span" fontSize={-2}>Streaming. Redefined.</Text>        
      </div>
    </Anchor>
  );
}

export { Logo };