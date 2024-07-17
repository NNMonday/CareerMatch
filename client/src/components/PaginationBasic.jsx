import React from 'react';

function PaginationBasic({ current, total = 2, onOk }) {
  if (total <= 0) {
    console.error('Pagination total cannot be less than or equal to 0.');
    return null; 
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {Array.from({ length: total }, (_, index) => index + 1).map((pageNumber, index) => (
            <li
              key={pageNumber} 
              className={`page-item ${current === pageNumber ? 'active' : ''}`}
            >
              <a className="page-link" href="#" onClick={() => onOk(pageNumber)}>
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PaginationBasic;