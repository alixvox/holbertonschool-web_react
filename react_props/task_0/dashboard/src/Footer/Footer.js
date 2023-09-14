import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Header() {
  return (
    <div className="App-footer">
        <p>{getFooterCopy(false)}</p>
        <p>{getFullYear()}</p>
      </div>
  );
}

export default Header;
