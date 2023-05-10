//Handles JSX for Profile Edit page where users can edit their profile and see how it would look to other users (that function is not available yet)

import { useEffect, useState } from "react";
import "./Profile.css";
import { getUserAndReplace, getUserProfile } from "./ProfileAPI";
import {
  Button,
  Card,
  Form,
  Grid,
  GridRow,
  Header,
  Image,
  Input,
  Segment,
  TextArea,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export const EditUserProfile = () => {
  const [user, editUser] = useState({
    email: "",
    preferredName: "",
    userImage: "",
    age: "",
    location: "",
    status: "",
    bio: "",
    userId: 0,
  });

  const localCurrentUser = localStorage.getItem("current_user");
  const currentUserObject = JSON.parse(localCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    getUserProfile(currentUserObject).then((data) => {
      const userObject = data[0];
      editUser(userObject);
    });
  }, []);

  const handleSaveButtonClick = (event) => {
    event.preventDefault();

    getUserAndReplace(user).then(() => {
      navigate("/profile");
    });
  };

  return (
    <>
      <Grid id="fullGrid">
        <GridRow>
          <Grid.Column width={11}>
            <Segment id="profileHeaderSegment">
              <Header id="editProfileHeader" as="h1">
                Edit User Profile
              </Header>
            </Segment>
            <Segment id="profileMainSegment">
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.email = evt.target.value;
                      editUser(copy);
                    }}
                    label="Email"
                    htmlFor="email"
                    value={user.email}
                    id="email"
                    required
                  />
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.preferredName = evt.target.value;
                      editUser(copy);
                    }}
                    label="Preferred Name"
                    htmlFor="preferredName"
                    value={user.preferredName}
                    id="preferredName"
                    required
                  />
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.userImage = evt.target.value;
                      editUser(copy);
                    }}
                    label="User Image Link (Square Images Work Best)"
                    htmlFor="userImage"
                    value={user.userImage}
                    id="userImage"
                    required
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.age = evt.target.value;
                      editUser(copy);
                    }}
                    label="Age"
                    htmlFor="age"
                    value={user.age}
                    id="age"
                    required
                  />
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.location = evt.target.value;
                      editUser(copy);
                    }}
                    label="Location"
                    htmlFor="location"
                    value={user.location}
                    id="location"
                    required
                  />
                  <Form.Field
                    control={Input}
                    onChange={(evt) => {
                      const copy = { ...user };
                      copy.status = evt.target.value;
                      editUser(copy);
                    }}
                    label="Status"
                    htmlFor="status"
                    value={user.status}
                    id="status"
                    required
                  />
                </Form.Group>
                <Form.Field
                  control={TextArea}
                  onChange={(evt) => {
                    const copy = { ...user };
                    copy.bio = evt.target.value;
                    editUser(copy);
                  }}
                  label="Bio"
                  htmlFor="bio"
                  value={user.bio}
                  id="bio"
                  required
                />
                <Button
                  onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                  id="button"
                >
                  Update Profile
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment id="sidebarSegment">
              <Card>
                <Card.Content id="userProfileSidebar">
                  <Image id="polaroid" src={user.userImage} size="medium" />
                  <Segment>
                    <p>
                      <strong>Username:</strong> {user.username}
                    </p>
                    <p>
                      <strong>Preferred Name:</strong> {user.preferredName}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.status}
                    </p>
                  </Segment>
                  <Segment>
                    <p>
                      <strong>Age:</strong> {user.age}
                    </p>
                    <p>
                      <strong>Location:</strong> {user.location}
                    </p>
                    <p id="bioNarrative">
                      <strong>Bio:</strong> {user.bio}
                    </p>
                  </Segment>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
        </GridRow>
      </Grid>
    </>
  );
};
