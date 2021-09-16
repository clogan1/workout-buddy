import React from "react";

function Search({searchTerm, setSearchTerm}) {
  return (
    <div className="search">
      <form>
        <input type="text"
        name="searchBar"
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)} }/>
      </form>
    </div>
  );
}

export default Search;