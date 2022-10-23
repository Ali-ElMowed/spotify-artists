import React from "react";

function Search(props) {
  return (
    <div className="search">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder={"Search for an artist"}
          className="search-input"
        />
        <button type={"submit"} className='search-btn'>Search</button>
      </form>
    </div>
  );
}

export default Search;
