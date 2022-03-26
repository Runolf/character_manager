import React, {Fragment} from 'react';

const Pagination = ({elementPerPage, totalElement, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalElement / elementPerPage); i++){
        pageNumbers.push(i);
    }


    
    return (<Fragment>
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='#' >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </Fragment>);
}
 
export default Pagination;