//Parent for UserSubmittedWritingResourcesList.js
// ./writing_resources

import { useState, useEffect } from "react";
import "./WritingResources.css";
import { UserSubmittedWritingResourcesCard } from "./UserSubmittedWritingResourcesCard";
import { Card, Header } from "semantic-ui-react";
import { GetUserSubmittedWritingResources } from "./WritingResourcesAPI";

export const UserSubmittedWritingResourcesList = () => {
  const [writingResources, setResources] = useState([]);
  const localCurrentUser = localStorage.getItem("current_user");
  const currentUserObject = JSON.parse(localCurrentUser);

  useEffect(() => {
    GetUserSubmittedWritingResources().then((resourceArray) => {
      setResources(resourceArray);
    });
  }, []);
  return (
    <>
      <Header as="h2" id="userSubmittedWritingResourcesHeader">
        Community Submitted Resources
        <Header.Subheader>
            Resources submitted by community members are located here, by the most recent submission. You can edit and delete your resource if it no longer useful.
        </Header.Subheader>
      </Header>
      <Card.Group id="userSubmittedWritingResourcesList" itemsPerRow={5}>
        {writingResources.map((writingResource) => (
          <UserSubmittedWritingResourcesCard
            key={`writingResource--${writingResource.id}`}
            currentUser={currentUserObject}
            resource={writingResource}
          />
        ))}
      </Card.Group>
    </>
  );
};
