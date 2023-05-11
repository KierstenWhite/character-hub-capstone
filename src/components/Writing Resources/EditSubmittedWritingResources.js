import "./WritingResources.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Input, Select, TextArea } from "semantic-ui-react";
import { DeleteResource, GetIndividualResource, GetResourceAndReplace } from "./WritingResourcesAPI";

export const EditSubmittedWritingResourcesForm = () => {
    const [writingResource, editResource] = useState({
        userId: 0,
        image: "",
        title: "",
        resourceType: "",
        description: "",
        link: "",
    })

    const { resourceId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        GetIndividualResource(resourceId).then((data) => {
            editResource(data);
        });
    }, [resourceId]);

    const handleSaveButtonClick = (event) => {
    event.preventDefault();

    GetResourceAndReplace(writingResource).then(() => {
        navigate(`/writing_resources`)
    })

    // const deleteButton = () => {
    //     return (
    //       <Button
    //         onClick={() => {
    //           DeleteResource(resourceId).then(() => {
    //             navigate("/writing_resources");
    //           });
    //         }}
    //         className="ui button"
    //         id="UserSubmittedResourceCardDeleteButton"
    //       >
    //         Delete Profile
    //       </Button>
    //     );
    //   };
    };

return (
    <>
    <Form id="editWritingResourceForm">
        <Header as="h2" id="writingResourceFormHeader">
            Share a Writing Resource
        </Header>
        <Form.Group widths="equal" id="firstResourceRow">
        <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.title = evt.target.value;
            editResource(copy);
            }}
            label="Resource Title"
            htmlFor="title"
            value={writingResource.title}
            id="title"
            required
          />
            <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.image = evt.target.value;
            editResource(copy);
            }}
            label="Image Link"
            htmlFor="image"
            value={writingResource.image}
            id="image"
            required
          />
          <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.resourceType = evt.target.value;
            editResource(copy);
            }}
            label="Resource Type"
            htmlFor="resourceType"
            value={writingResource.resourceType}
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
            editResource(copy);
            }}
            label="Description"
            htmlFor="description"
            value={writingResource.description}
            id="description"
            required
          />
          <Form.Field
            control={Input}
            onChange={(evt) => {
            const copy = { ...writingResource };
            copy.link = evt.target.value;
            editResource(copy);
            }}
            label="Link"
            htmlFor="link"
            value={writingResource.link}
            id="link"
            required
          />
        </Form.Group>
        <Form.Group>
        <Form.Field
          control={Button}
          onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
          id="editWritingResourceButton"
        >
          Save Edits
        </Form.Field>
        <Form.Field
          control={Button}
          onClick={() => {
            DeleteResource(resourceId).then(() => {
              navigate("/writing_resources");
            });
          }}
          id="UserSubmittedResourceCardDeleteButton"
        >
          Delete Resource
        </Form.Field>
        </Form.Group>
    </Form>
    </>
)

}