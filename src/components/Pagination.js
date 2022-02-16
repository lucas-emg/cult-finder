import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav class="pagination">
        <ul>
            {pageNumbers.map(number => (
                <a onClick={() => paginate(number)} href="#" className="page-link">
                <li key={number} className="page-item"> 
                    {number}
                </li>
                </a>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination