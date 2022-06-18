import React from "react";
import SearchField from "./SearchField";
import Cart from "./Cart";

const Home = ({ setSearchField, searchField, characters }) => {
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSearchClick = (searchItem) => {
    setSearchField(searchItem);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <div className="App tc">
      <h1 className="f1">Rick and Morty Characters</h1>
      <SearchField
        searchClick={onSearchClick}
        searchChange={onSearchChange}
        characters={characters}
        value={searchField}
      />

      {filteredCharacters.map((character, i) => (
        <Cart
          key={i}
          name={character.name}
          id={character.id}
          image={character.image}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default Home;
