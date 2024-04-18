import React, { useState, useEffect } from "react";

function LoadMoreItems() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setItems([...items, ...data]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h2>Load More Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default LoadMoreItems;
