import React from "react";
import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css['footer']}>
      <div className={css['content']}>
        Streamox Corporations &copy; 2023
      </div>
    </footer>
  );
}

export default Footer;