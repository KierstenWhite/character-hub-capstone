//Handles JSX for how each character is shown at /character_home
//Creates a conditional that users only see the characters created on the logged in account

import { Link } from "react-router-dom";
import "./Character.css";
import { Button, Card, Image } from "semantic-ui-react";

export const CharacterHomeList = ({ character, currentUser }) => {
  return character.userId === currentUser.id ? (
    <>
      <Card
        id="individualCharacterCard"
        key={`character==${character.id}`}
        color="green"
      >
        <Image
          src={character.characterImage}
          id="hubCardImage"
          alt="CardImage"
        />
        <Card.Content id="hubCardContent">
          <Card.Header id="hubCardHeader">
            {character.firstName} {character.lastName}
          </Card.Header>
          <Card.Description id="hubCardDescription">
            Created by {character.user.username}
          </Card.Description>
          <Link to={`/characters/${character.id}`}>
            <Button id="hubCardProfileButton">See Profile</Button>
          </Link>
        </Card.Content>
      </Card>
    </>
  ) : (
    ""
  );
};
