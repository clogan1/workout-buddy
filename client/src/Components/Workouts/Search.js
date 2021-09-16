import React from "react";

function Search({search, setSearchTerm}) {
  return (
    <div className="search">
      <form>
        <input type="text"
        name="searchBar"
        value={search}
        onChange={(e)=>{setSearchTerm(e.target.value)} }/>
      </form>
    </div>
  );
}

export default Search;