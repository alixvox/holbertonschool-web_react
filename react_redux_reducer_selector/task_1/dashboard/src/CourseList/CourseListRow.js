import React, { useState } from 'react'; // Import useState
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Define the styles
const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false); // useState hook for checkbox

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (!textSecondCell) {
      return (
        <tr className={css(styles.headerRow)}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.headerRow)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(isChecked ? styles.rowChecked : styles.row)}>
        <td>
          <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
