import { useState, useEffect } from "react";
import "./App.css";
import CharacterProfile from "./components/CharacterProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      });
  };

  const onSearchClick = (searchItem) => {
    setSearchField(searchItem);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            setSearchField={setSearchField}
            searchField={searchField}
            searchClick={onSearchClick}
            searchChange={onSearchChange}
            characters={characters}
            value={searchField}
          />
        </Route>
        <Route exact path={`/:${characters.id}`}>
          <CharacterProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
