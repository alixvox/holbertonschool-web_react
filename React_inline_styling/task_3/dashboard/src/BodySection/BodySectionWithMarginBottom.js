import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
