import React, { useState, useEffect } from "react";

const SearchForm = props => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    props.hanldeInput(searchText);
  });

  return (
    <div>
      <form>
        <label>Enter Name</label>
        <input
          name="text"
          type="text"
          onChange={e => {
            setSearchText(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <input
          type="radio"
          name="searchType"
          value="public"
          onChange={e => {
            setSearchType(e.target.value);
          }}
        />
        Public Repositories
        <br />
        <input
          type="radio"
          name="searchType"
          value="user"
          onChange={e => {
            setSearchType(e.target.value);
          }}
        />
        User Repositories
        <br />
        <br />
        <input
          type="button"
          value="Search"
          onClick={() => props.handleSearch(searchType)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
