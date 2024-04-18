import React, { useEffect, useState } from "react";

const SerchFilter = () => {
  const initialMovies = [
    { id: 1, title: "Cricket 1", genre: "Action" },
    { id: 2, title: "Mafia 2", genre: "Drama" },
    { id: 3, title: "Blacklist 3", genre: "Comedy" },
    { id: 4, title: "Gunda", genre: "Action" },
    { id: 5, title: "Pathan ", genre: "Drama" },
  ];

  const [search, setSearch] = useState("");
  const [genra, setGenra] = useState();

  let filterMovie = initialMovies.filter((item, i) => {
    if (genra === "ALL" || genra === undefined) {
      return item.title.toLowerCase().includes(search.toLowerCase());
    } else {
      return item.title.toLowerCase().includes(search.toLowerCase()) && item.genre === genra;
    }
  });

  const genres = Array.from(new Set(initialMovies.map((item) => item.genre)));
  return (
    <div>
      <div>
        <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)} />
        <select name="" id="" value={genra} onChange={(e) => setGenra(e.target.value)}>
          <option value="All">All</option>
          {genres.map((m, i) => (
            <option value={m} key={i}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filterMovie.map((m, i) => {
          return (
            <div key={i}>
              <span>{m.title} --</span>
              <span>{m.genre}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SerchFilter;
