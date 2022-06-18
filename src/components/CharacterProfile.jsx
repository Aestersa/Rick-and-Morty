import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../index.css";

const CharacterProfile = (match) => {
  const [character, setCharacter] = useState([]);
  const [episode, setEpisode] = useState([]);

  const { undefined } = useParams();

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = () => {
    fetch(`https://rickandmortyapi.com/api/character/${undefined}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacter(data);
        setEpisode(data.episode[0].slice(32));
      });
  };

  const getDate = () => {
    let apiDate = character.created;
    let timestamp = new Date(apiDate).getTime();
    let day = new Date(timestamp).getDate();
    let month = new Date(timestamp).getMonth() + 1;
    let year = new Date(timestamp).getFullYear();
    let newDateFormat = `${day}/${month}/${year}`;
    return newDateFormat;
  };

  return (
    <div className="character-wrap">
      <h1>{character.name}</h1>
      <div className="character tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={character.image} />
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{episode}</h2>
        <h2>{character.status}</h2>
        <h2>{getDate()}</h2>
      </div>
    </div>
  );
};

export default CharacterProfile;
