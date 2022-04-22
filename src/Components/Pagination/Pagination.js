import React, { Fragment } from "react";
import "./Pagination.css";

const Pagination = ({ elementPerPage, totalElement, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElement / elementPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Fragment>
      <nav className="navContainer">
        <ul className="navNumbers">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => paginate(number)} href={() => false}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;
