import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API after component mounts
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  //==Async======
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/data');
  //       const jsonData = await response.json();
  //       // Update state with the fetched data
  //       setData(jsonData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   // Call the fetchData function when the component mounts
  //   fetchData();

  //   // Clean up function to cancel any pending requests when the component unmounts
  //   return () => {};
  // }, []); 

  return (
    <div>
      <h1>Data List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <span>{item.userId}</span>
              <span>{item.title}</span> <br />
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
