import { React, useState } from "react";

export const SearchForm = ({busqueda, setBusqueda}) => {
//   const [searchCity, setSearchCity] = useState("");
//   const [searchResultCity, setSearchResultCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    // setBusqueda(e.target.value);
    
  };

  console.log(busqueda)
  return (
    <div className="searchForm">
      <form onSubmit={handleSearch}>
        <label htmlFor="">Search City</label>
        <input type="text" placeholder="Search" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}></input>
      </form>
    </div>
  );
};
