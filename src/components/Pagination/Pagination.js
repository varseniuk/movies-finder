import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Pagination.scss';

export const Pagination = ({ pages, changePage, currentPage }) => {
  let pageBtns = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      {currentPage !== 1 && (
        <li>
          <button
            type="button"
            className="page-btn slide"
            onClick={() => {
              changePage(1);
            }}
          >
            {`<<`}
          </button>
        </li>
      )}
      {
        pageBtns
          .slice(currentPage >= 3 ? currentPage - 3 : 0, currentPage + 2)
          .map(btn => (
            <li key={btn}>
              <button
                type="button"
                className={ClassNames({
                  'page-btn': true,
                  active: btn === currentPage,
                })}
                onClick={() => changePage(btn)}
              >
                {btn}
              </button>
            </li>
          ))
      }
      {currentPage < pages && (
        <li>
          <button
            type="button"
            className="page-btn slide"
            onClick={() => {
              changePage(pages);
              if (pages > 10 && currentPage !== pages && currentPage > 10) {
                pageBtns = pageBtns.map(page => page + 1);
              }
            }}
          >
            {`>>`}
          </button>
        </li>
      )}
    </ul>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
