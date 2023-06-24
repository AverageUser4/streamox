import { Link } from "react-router-dom";
import css from './Logo.module.css';
import { ReactComponent as LogoSVG } from '../../assets/icons/logo.svg';
import Text from "../Text/Text";

function Logo() {
  return (
    <Link to="/" className={css['container']}>
      <LogoSVG className={css['icon']}/>
      <div>
        <Text element="span" fontSize={1}>Streamox</Text>        
        <Text element="span" fontSize={-2}>Streaming. Redefined.</Text>        
      </div>
    </Link>
  );
}

export default Logo;