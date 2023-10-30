import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({ dogsPerPage, dogs, paginado, currentPage }) => {
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(dogs.length / dogsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  const maxVisiblePages = 3;  // Numero de páginas visibles a la vez

  let startPage = currentPage - 1;
  let endPage = currentPage + 1;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(startPage + maxVisiblePages - 1, pageNumbers.length);
  }

  if (endPage > pageNumbers.length) {
    endPage = pageNumbers.length;
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  return (
    <div className="pagination">
      <nav>
        <ul>
          {currentPage > 1 && (
            <>
            
              {startPage > 1 && (
                <li className={style.li}>
                  <a onClick={() => paginado(1)}>1</a>
                </li>
              )}
              {startPage > 2 && (
                <li className={style.dots}>
                  <span>...</span>
                </li>
              )}
            </>
          )}

          {pageNumbers.slice(startPage - 1, endPage).map(number => (
            <li
              key={number}
              className={`${style.li} ${currentPage === number ? style.liSelec : ''}`}
            >
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}

          {currentPage < pageNumbers.length && (
            <>
              {endPage < pageNumbers.length - 1 && (
                <li className={style.dots}>
                  <span>...</span>
                </li>
              )}
              {endPage < pageNumbers.length && (
                <li className={style.li}>
                  <a onClick={() => paginado(pageNumbers.length)}>{pageNumbers.length}</a>
                </li>
              )}
              
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;


// for(let i = 0; i < Math.ceil(dogs.length / dogsPerPage); i++) {
//   pageNumbers.push(i + 1);
// }

// return (
//   <div className="pagination">
//     <nav>
//       <ul>
//         {pageNumbers.map(number => (
//           <li
//             key={number}
//             className={`${style.li} ${currentPage === number ? style.liSelec : ''}`}
//           >
//             <a onClick={() => paginado(number)}>{number}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   </div>
// );