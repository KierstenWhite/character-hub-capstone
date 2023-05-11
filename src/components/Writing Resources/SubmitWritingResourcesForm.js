import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Header, Input, Select, TextArea } from "semantic-ui-react";
import { GetNewWritingResourceAndSend } from "./WritingResourcesAPI";

export const SubmitWritingResourcesForm = () => {
    const [writingResource, update] = useState({
        userId: 0,
        image: "",
        title: "",
        resourceType: "",
        description: "",
        link: "",
        timestamp: "",
    })

    const navigate = useNavigate();
    const localCurrentUser = localStorage.getItem("current_user");
    const currentUserObject = JSON.parse(localCurrentUser);

    const handleSaveButtonClick = (event) => {
    event.preventDefault();

    const resourceToSendToAPI = {
        userId: currentUserObject.id,
        image: writingResource.image,
        title: writingResource.title,
        resourceType: writingResource.resourceType,
        description: writingResource.description,
        link: writingResource.link,
        timestamp: new Date(),
    };

    return GetNewWritingResourceAndSend(resourceToSendToAPI).then(() => {
        navigate("/writing_resources")
    })
}

return (
    <>
    <Form id="submitWritingResourceForm">
        <Header as="h2" id="writingResourceFormHeader">
            Share a Writing Resource
        </Header>
        <Form.Group widths="equal" id="firstResourceRow">
        <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.title = evt.target.value;
            update(copy);
            }}
            label="Resource Title"
            htmlFor="title"
            placeholder="Resource Title"
            id="title"
            required
          />
            <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.image = evt.target.value;
            update(copy);
            }}
            label="Image Link"
            htmlFor="image"
            placeholder="Submit an image to go with your resource"
            id="image"
            required
          />
          <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.resourceType = evt.target.value;
            update(copy);
            }}
            label="Resource Type"
            htmlFor="resourceType"
            placeholder="Website, Blog, Article, Video, PDF, etc."
            id="resourceType"
            required
          />
        </Form.Group>
        <Form.Group widths="equal" id="secondResourceRow">
        <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.description = evt.target.value;
            update(copy);
            }}
            label="Description"
            htmlFor="description"
            placeholder="Provide a brief description of the resource"
            id="description"
            required
          />
          <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.link = evt.target.value;
            update(copy);
            }}
            label="Resource Link"
            htmlFor="link"
            placeholder="Link to your resource"
            id="link"
            required
          />
        </Form.Group>
        <Form.Field
          control={Button}
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          id="submitWritingResourceButton"
        >
          Share Resource
        </Form.Field>
    </Form>
    </>
)

}