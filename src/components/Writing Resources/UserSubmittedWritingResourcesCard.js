import { Link, useNavigate, useParams } from "react-router-dom"
import "./WritingResources.css"
import { Button, Card, Image} from "semantic-ui-react"
import { DeleteResource } from "./WritingResourcesAPI";

export const UserSubmittedWritingResourcesCard = ({resource, currentUser}) => {

    const { resourceId } = useParams();
    const navigate = useNavigate();
    
    return resource.userId === currentUser.id ? (
    <>
    <Card id="fullCardUserSubmittedResource"
            key={`resource==${resource.id}`}>
                <Card.Content id="cardResourceContentUserSubmitted">
                    <Image
                    floated='right'
                    size='mini'
                    src={resource.image}
                    />
                    <Card.Header id="UserResourceCardHeader">{resource.title}</Card.Header>
                    <Card.Meta id="UserResourceCardMeta">{resource.resourceType} - Submitted by {resource.user.username}</Card.Meta>
                    <Card.Description id="UserResourceCardDescription">{resource.description}</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentExtraUserSubmitted">
                        <a href={resource.link}><Button id="UserSubmittedResourceCardButton">
                            Visit
                        </Button></a>
                        <Link to={`/edit_writing_resource/${resource?.id}`}><Button id="UserSubmittedResourceCardEditButton">Edit</Button></Link>
                </Card.Content>
            </Card>
    </>) : (
        <>
        <Card id="fullCardUserSubmittedResource"
            key={`resource==${resource.id}`}>
                <Card.Content id="cardResourceContentUserSubmitted">
                    <Image
                    floated='right'
                    size='mini'
                    src={resource.image}
                    />
                    <Card.Header id="UserResourceCardHeader">{resource.title}</Card.Header>
                    <Card.Meta id="UserResourceCardMeta">{resource.resourceType} - Submitted by {resource.user.username}</Card.Meta>
                    <Card.Description id="UserResourceCardDescription">{resource.description}</Card.Description>
                </Card.Content>
                <Card.Content extra id="cardResourceContentExtraUserSubmitted">
                        <a href={resource.link} target="_blank"><Button id="UserSubmittedResourceCardButton">
                            Visit
                        </Button></a>
                </Card.Content>
            </Card>
        </>
    )
}