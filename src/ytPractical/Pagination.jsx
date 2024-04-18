import React, { useState, useEffect } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handlePageChange = (page) => {
    fetchProducts(page);
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    ));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const renderPageNumbers = () => {
    return getPageNumbers().map((number) => (
      <li
        key={number}
        className={number === currentPage ? 'active' : null}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </li>
    ));
  };

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {renderProducts()}
          <div className="pagination">
            <ul>
              <li className={currentPage === 1 ? 'disabled' : null} onClick={() => handlePageChange(currentPage - 1)}>
                Prev
              </li>
              {renderPageNumbers()}
              <li
                className={currentPage === totalPages ? 'disabled' : null}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
