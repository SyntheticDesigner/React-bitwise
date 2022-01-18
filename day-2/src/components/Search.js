import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
import { SearchResults } from "./SearchResults";
import MovieCard from "./MovieCard";
import { getApiId } from "./variables";

const Search = ({ setSearching, setSearchData }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let _searchString = e.target[0].value;
    let data = {};

    if (_searchString.length) {
      data = await getMoviesBySearchTerm(getApiId(), _searchString);
      setSearching(true);
    } else {
      setSearching(false);
      e.target[0].value = "";
    }

    // console.log(data);
    setSearchData(data);
    e.target[0].value = "";
    // setData(data);
  };

  return (
    <>
      <form id='searchBar' onSubmit={onSubmit}>
        <div id='searchField'>
          <label>Search</label>
          <input
            type='text'
            placeholder='Search Here'
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>

        <input type='submit' value='Search' className='btn btn-block' />
      </form>
    </>
  );
};

export default Search;
