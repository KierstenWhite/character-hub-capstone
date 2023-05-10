//Parent for CharacterHomeList.js
// ./character_home

import { useState, useEffect } from "react";
import "./Character.css";
import { CharacterHomeList } from "./CharacterHomeList";
import { GetCharacterInformation } from "./CharacterAPI";
import { Card, Header } from "semantic-ui-react";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const localCurrentUser = localStorage.getItem("current_user");
  const currentUserObject = JSON.parse(localCurrentUser);

  useEffect(() => {
    GetCharacterInformation().then((characterArray) => {
      setCharacters(characterArray);
    });
  }, []);
  return (
    <>
      <Header as="h2" id="characterHomeHeader">
        My Characters
      </Header>
      <Card.Group id="characterHomePage" itemsPerRow={6}>
        {characters.map((character) => (
          <CharacterHomeList
            key={`character--${character.id}`}
            currentUser={currentUserObject}
            character={character}
          />
        ))}
      </Card.Group>
    </>
  );
};
