import { Link } from "react-router-dom"
import "./WritingResources.css"
import { Button, Card, Header, Image } from "semantic-ui-react"

export const PermanentWritingResources = () => {
    return (
        <>
        <Header as="h2" id="permanentResourcesHeader">
            Curated Writing Resources
            <div id="subheaderDiv">
            <Header.Subheader id="permanentResourcesSubHeader">
                These are some of our favorite writing resources. Check them out, and then feel free to submit your own below.
            </Header.Subheader>
            <Header.Subheader>
            <Link to={"/submit_new_writing_resource"}><Button id="submitNewResourceButton">Submit a New Resource</Button></Link>
            </Header.Subheader>
            </div>
        </Header>
        <Card.Group id="permanentResourcesCardGroup" itemsPerRow={5}>
            <Card id="fullCardResource">
                <Card.Content id="cardResourceContentOne">
                    <Image
                    floated='right'
                    size='mini'
                    src="https://www.grammarly.com/media-resources/grammarlyicon-png"
                    />
                    <Card.Header id="permanentResourceCardHeader">Grammarly</Card.Header>
                    <Card.Meta id="permanentResourceCardMeta">Website</Card.Meta>
                    <Card.Description id="permanentResourceCardDescription">Grammarly is an AI based writing extension to help see mistakes and cleanup your writing.</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentOneExtra">
                        <a href="https://www.grammarly.com/" target="_blank"><Button id="permanentResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
            <Card id="fullCardResource">
                <Card.Content id="cardResourceContentOne">
                    <Image
                    floated='right'
                    size='mini'
                    src="https://i.imgur.com/bs3TbVs.png"
                    />
                    <Card.Header id="permanentResourceCardHeader">How to Avoid Writing a Mary Sue Character</Card.Header>
                    <Card.Meta id="permanentResourceCardMeta">Blog</Card.Meta>
                    <Card.Description id="permanentResourceCardDescription">Learn about how to avoid the Sue/Stu trope and write dynamic characters.</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentOneExtra">
                        <a href="https://barelyharebooks.com/how-to-avoid-writing-a-mary-sue-character/" target="_blank"><Button id="permanentResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
            <Card id="fullCardResource">
                <Card.Content id="cardResourceContentOne">
                    <Image
                    floated='right'
                    size='mini'
                    src="https://www.familyecho.com/logo-320x64.png"
                    />
                    <Card.Header id="permanentResourceCardHeader">Family Echo</Card.Header>
                    <Card.Meta id="permanentResourceCardMeta">Website</Card.Meta>
                    <Card.Description id="permanentResourceCardDescription">A free resource to create a family tree for your character.</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentOneExtra">
                        <a href="https://www.familyecho.com/" target="_blank"><Button id="permanentResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
            <Card id="fullCardResource">
                <Card.Content id="cardResourceContentOne">
                    <Image
                    floated='right'
                    size='mini'
                    src="https://i.imgur.com/JSJnjq5.jpg"
                    />
                    <Card.Header id="permanentResourceCardHeader">99 Archetypes and Stock Charcters Screenwriters Can Mold</Card.Header>
                    <Card.Meta id="permanentResourceCardMeta">Article</Card.Meta>
                    <Card.Description id="permanentResourceCardDescription">Need some inspiration? Stock characters can be a great starting point to expand upon.</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentOneExtra">
                        <a href="https://screencraft.org/blog/99-archetypes-and-stock-characters-screenwriters-can-mold/" target="_blank"><Button id="permanentResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
            <Card id="fullCardResource">
                <Card.Content id="cardResourceContentOne">
                    <Image
                    floated='right'
                    size='mini'
                    src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png"
                    />
                    <Card.Header id="permanentResourceCardHeader">52 Resources For Creating Killer Characters</Card.Header>
                    <Card.Meta id="permanentResourceCardMeta">Article</Card.Meta>
                    <Card.Description id="permanentResourceCardDescription">Medium gathered 52 resources to peruse at your leisure as you continue writing.</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentOneExtra">
                        <a href="https://medium.com/the-1000-day-mfa/52-resources-for-creating-killer-characters-2838b03da403" target="_blank"><Button id="permanentResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
        </Card.Group>
        </>
    )
}