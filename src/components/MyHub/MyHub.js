//Handles JSX for MyHub page

import { Link } from "react-router-dom";
import "./MyHub.css";
import { Button, Card, Header, Image } from "semantic-ui-react";

export const MyHubPage = () => {
  return (
    <>
      <Header id="header">
        <Image src="https://i.imgur.com/R3yMbZB.png" id="myHubQuote" />
      </Header>
      <Card.Group id="myHubCardGroup">
        <Card id="individualCard" color="purple">
          <Image src="https://i.imgur.com/QSwv9Gy.png" />
          <Card.Content id="cardContent">
            <Card.Description id="cardDescription">
              Visit all of your exisiting characters, make edits, and share.
            </Card.Description>
            <Link className="navbar_link" to="/character_home">
              <Button id="myHubButton">Character Home</Button>
            </Link>
          </Card.Content>
        </Card>
        <Card id="individualCard" color="purple">
          <Image src="https://i.imgur.com/1LD3CaX.png" />
          <Card.Content id="cardContent">
            <Card.Description id="cardDescription">
              Have an idea for a new character? Start here.
            </Card.Description>
            <Link className="navbar_link" to="/add_a_new_character_form">
              <Button id="myHubButton">Add a New Character</Button>
            </Link>
          </Card.Content>
        </Card>
        <Card id="individualCard" color="purple">
          <Image src="https://i.imgur.com/EnMd1mO.png" />
          <Card.Content id="cardContent">
            <Card.Description id="cardDescription">
              Our crowd sourced Writing Resources tab will have something for
              everyone.
            </Card.Description>
            <Link className="navbar_link" to="/writing_resources">
              <Button id="myHubButton">Writing Resources</Button>
            </Link>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
};
