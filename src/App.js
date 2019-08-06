import React, { useState, useReducer } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import DisplayPanel from "./components/DisplayPanel";
import RequestCounter from "./components/RequestCounter";
import { initialState, reducer } from "./reducers/RequestReducer";
import Axios from "axios";

export const ApplicationContext = React.createContext();

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const hanldeInput = text => {
    if (text !== searchText) {
      setSearchText(text);
      setSearchResult("");
    }
  };

  const handleSearch = async searchType => {
    dispatch({ type: "increment" });
    if (!searchType) return alert("Select Search Type!");

    let url = "https://api.github.com/search/repositories?q=" + searchText;

    if (searchType === "user")
      url = "https://api.github.com/users/" + searchText + "/repos";

    let res = await Axios.get(url);
    console.log("Result", res);
    let output = {
      searchType,
      data: res.data
    };
    setSearchResult(output);
  };

  return (
    <div className="App">
      <ApplicationContext.Provider value={{ requestsCount: state.request, searchText: searchText}}>
        <h1>React Hooks - Demo App</h1>
        <RequestCounter style={{ margin: "10px 0px" }} />
        <hr />
        <SearchForm hanldeInput={hanldeInput} handleSearch={handleSearch} />
        <hr />
        <DisplayPanel result={searchResult} />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
