import { Link } from "react-router-dom"
import "./MyHub.css"
import { Button, Card, Image } from "semantic-ui-react"

export const MyHubPage = () => {
    return (
        <>
        <Card.Group id="myHubCardGroup">
        <Card>
            <Image src="https://i.imgur.com/QSwv9Gy.png" />
            <Card.Content>
                <Card.Description>Visit all of your exisiting characters, make edits, and share.</Card.Description>
                <Link className="navbar_link" to="/character_home"><Button id="myHubButton">Character Home</Button></Link>
            </Card.Content>
        </Card>
        <Card>
            <Image src="https://i.imgur.com/1LD3CaX.png" />
            <Card.Content>
                <Card.Description>Have an idea for a new character? Start here.</Card.Description>
                <Link className="navbar_link" to="/add_a_new_character_form"><Button id="myHubButton">Add a New Character</Button></Link>
            </Card.Content>
        </Card>
        <Card>
            <Image src="https://i.imgur.com/EnMd1mO.png" />
            <Card.Content>
                <Card.Description>Our crowd sourced Writing Resources tab will help anyone whether you are a novice or bestseller.</Card.Description>
                <Link className="navbar_link" to="/writing_resources"><Button id="myHubButton">Writing Resources</Button></Link>
            </Card.Content>
        </Card>
        </Card.Group>
        </>
    )
}