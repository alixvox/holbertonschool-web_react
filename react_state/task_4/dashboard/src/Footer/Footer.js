import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
  footer: {
    padding: '10px 20px',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid red',
  },
});

function Footer() {
  const context = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {context.user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
}

export default Footer;
