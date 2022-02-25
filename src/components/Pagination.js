import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className="pagination">
        <ul>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => paginate(number)} href="#" className="page-link">
                <li className="page-item"> 
                    {number}
                </li>
                </button>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination