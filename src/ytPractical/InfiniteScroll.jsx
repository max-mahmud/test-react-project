import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to fetch more items
    const fetchMoreItems = async () => {
      setLoading(true);
      // Simulated API call to fetch data
      const response = await fetch(`https://dummyjson.com/products?page=${pageNumber}`);
      const data = await response.json();
      setItems(prevItems => [...prevItems, ...data.products]);
      setPageNumber(prevPageNumber => prevPageNumber + 1);
      setLoading(false);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        fetchMoreItems();
      }
    }, { threshold: 1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, pageNumber]);

  return (
    <div>
      <h2>Infinite Scroll</h2>
      <div>
        {items?.map(item => (
          <div key={item.id} className="item">
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div style={{background: "green", height: "60px"}} ref={containerRef}>{loading && 'Loading...'}</div>
    </div>
  );
};

export default InfiniteScroll;
