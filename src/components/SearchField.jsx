import React from "react";

const SearchField = ({ searchChange, characters, value, searchClick }) => {
  return (
    <div className="pa2">
      <input
        value={value}
        type="text"
        placeholder="Search Characters"
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
      />
      <div className="dropdown bg-lightest-blue ba b--green">
        {characters
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const name = item.name.toLowerCase();

            return (
              searchTerm && name.startsWith(searchTerm) && name !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item, i) => (
            <div
              onClick={() => searchClick(item.name)}
              className="dropdown-row"
              key={i}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchField;
