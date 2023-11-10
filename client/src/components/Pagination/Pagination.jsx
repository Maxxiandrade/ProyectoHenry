import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({ dogsPerPage, dogs, paginado, currentPage }) => {
  const pageNumbers = [];

  for(let i = 0; i < Math.ceil(dogs.length / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  
  return (
      <div className="pagination">
        <nav>
        <ul>
          {pageNumbers.map(number => (
              <li
                key={number}
                className={`${style.li} ${currentPage === number ? style.liSelec : ''}`}
              >
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
};

export default Pagination;


