import React from "react";
import { Link } from "react-router-dom";
import css from './Logo.module.css';

import { ReactComponent as LogoSVG } from '../../assets/icons/logo.svg';

function Logo() {
  return (
    <Link to="/" className={css['container']}>
      <LogoSVG className={css['icon']}/>
      <div>
        <p style={{ margin: 0 }}>Streamox</p>
        <p style={{ margin: 0 }}>Streaming. Redefined.</p>
      </div>
    </Link>
  );
}

export default Logo;