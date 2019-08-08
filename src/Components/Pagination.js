import React from 'react';
import styles from '../Styles/Pagination.module.css';

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;