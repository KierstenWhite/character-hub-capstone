import { useState } from "react"
import './Character.css'
import { useNavigate } from "react-router-dom";
import { GetNewCharacterFormAndSend } from "./CharacterAPI";
import { Button, Divider, Form, Header, Input, Segment, TextArea } from "semantic-ui-react";
import { CharacterTraitRandomizer } from "./CharacterTraitRandomizer";
import { ColorRandomizer } from "./ColorRandomizer";

export const AddANewCharacterForm = () => {
    const [character, update] = useState({
        characterImage: "",
        quote: "",
        firstName: "",
        firstNameEtymology: "",
        middleName: "",
        middleNameEtymology: "",
        lastName: "",
        lastNameEtymology: "",
        nickname: "",
        species: "",
        birthdayOrAge: "",
        birthLocation: "",
        nationalityEthnicity: "",
        religiousAffiliation: "",
        gender: "",
        sexualOrientation: "",
        playby: "",
        hairColor: "",
        eyeColor: "",
        skintone: "",
        height: "",
        physicalDescription: "",
        aestheticStyle: "",
        characterTraits: "",
        strengths: "",
        weaknesses: "",
        likes: "",
        dislikes: "",
        specialSkills: "",
        hobbies: "",
        characterNarrative: "",
        relationshipNarrative: "",
        dateCreated: ""
    });

    const navigate = useNavigate()
    const localCurrentUser = localStorage.getItem("current_user");
    const currentUserObject = JSON.parse(localCurrentUser);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

    const profileToSendToAPI = {
        userId: currentUserObject.id,
        characterImage: character.characterImage,
        quote: character.quote,
        firstName: character.firstName,
        firstNameEtymology: character.firstNameEtymology,
        middleName: character.middleName,
        middleNameEtymology: character.middleNameEtymology,
        lastName: character.lastName,
        lastNameEtymology: character.lastNameEtymology,
        nickname: character.nickname,
        species: character.species,
        birthdayOrAge: character.birthdayOrAge,
        birthLocation: character.birthLocation,
        nationalityEthnicity: character.nationalityEthnicity,
        religiousAffiliation: character.religiousAffiliation,
        gender: character.gender,
        sexualOrientation: character.sexualOrientation,
        playby: character.playby,
        hairColor: character.hairColor,
        eyeColor: character.eyeColor,
        skintone: character.skintone,
        height: character.height,
        physicalDescription: character.physicalDescription,
        aestheticStyle: character.aestheticStyle,
        characterTraits: character.characterTraits,
        strengths: character.strengths,
        weaknesses: character.weaknesses,
        likes: character.likes,
        dislikes: character.dislikes,
        specialSkills: character.specialSkills,
        hobbies: character.hobbies,
        characterNarrative: character.characterNarrative,
        relationshipNarrative: character.relationshipNarrative,
        dateCreated: new Date()
    };
    
    return GetNewCharacterFormAndSend(profileToSendToAPI).then(() => {
        navigate("/character_home")
    })

}

    return (
    <>
        <Form id="addNewCharacterForm">
            <Header as="h2">
                Add a New Character Form
                <Header.Subheader>
                    Indulge your muse by starting a new character profile. There are multiple fields that can be used. You can come back and edit this form at any time, meaning you don't have to know everything in one sitting. The only required fields to save a form are First and Last Name.
                </Header.Subheader>
            </Header>
            <Header as="h3">
                    Names
                </Header>
            <Form.Group widths="equal" id="names">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.firstName = evt.target.value;
                update(copy);}}
                label="First Name"
                htmlFor="firstName"
                placeholder="First Name"
                id="firstName"
                required/>
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.middleName = evt.target.value;
                update(copy);}}
                label="Middle Name"
                htmlFor="middleName"
                placeholder="Middle Name"
                id="middleName"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.lastName = evt.target.value;
                update(copy);}}
                label="Last Name"
                htmlFor="lastName"
                placeholder="last Name"
                id="lastName"
                required/>
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.firstNameEtymology = evt.target.value;
                update(copy);}}
                label="First Name Etymology"
                htmlFor="firstNameEtymology"
                placeholder="First Name Etymology"
                id="firstNameEtymology"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.middleNameEtymology = evt.target.value;
                update(copy);}}
                label="Middle Name Etymology"
                htmlFor="middleNameEtymology"
                placeholder="Middle Name Etymology"
                id="middleNameEtymology"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.lastNameEtymology = evt.target.value;
                update(copy);}}
                label="Last Name Etymology"
                htmlFor="lastNameEtymology"
                placeholder="Last Name Etymology"
                id="lastNameEtymology"
                />
            </Form.Group>
            <Form.Group>
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.nickname = evt.target.value;
                update(copy);}}
                label="Nickname"
                htmlFor="nickname"
                placeholder="Nickname"
                id="nickname"
                />
            </Form.Group>
            <Header as="h3">
                    Character Profile Details
                </Header>
            <Form.Group widths="equal" id="profileDetails">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.quote = evt.target.value;
                update(copy);}}
                label="Quote"
                htmlFor="quote"
                placeholder="Quote"
                id="quote"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.characterImage = evt.target.value;
                update(copy);}}
                label="Character Image"
                htmlFor="characterImage"
                placeholder="Add a link to an image that represents your character"
                id="characterImage"
                />
            </Form.Group>
            <Header as="h3">
                    Basic Details
                </Header>
            <Form.Group widths="equal" id="basicProfileDetails">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.species = evt.target.value;
                update(copy);}}
                label="Species"
                htmlFor="species"
                placeholder="Species"
                id="species"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.birthdayOrAge = evt.target.value;
                update(copy);}}
                label="Birthday and/or Age"
                htmlFor="birthdayOrAge"
                placeholder="Birthday and/or Age"
                id="birthdayOrAge"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.nationalityEthnicity = evt.target.value;
                update(copy);}}
                label="Nationality and/or Ethnicity"
                htmlFor="nationalityEthnicity"
                placeholder="Nationality and/or Ethnicity"
                id="nationalityEthnicity"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.religiousAffiliation = evt.target.value;
                update(copy);}}
                label="Religious Affiliation"
                htmlFor="religiousAffiliation"
                placeholder="Religious Affiliation"
                id="religiousAffiliation"
                />
            </Form.Group>
            <Form.Group widths="equal" id="basicProfileDetailsTwo">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.gender = evt.target.value;
                update(copy);}}
                label="Gender Identity"
                htmlFor="gender"
                placeholder="Gender Identity"
                id="gender"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.sexualOrientation = evt.target.value;
                update(copy);}}
                label="Sexual Orientation"
                htmlFor="sexualOrientation"
                placeholder="Sexual Orientation"
                id="sexualOrientation"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.playby = evt.target.value;
                update(copy);}}
                label="Playby or Faceclaim"
                htmlFor="playby"
                placeholder="Playby or Faceclaim"
                id="playby"
                />
            </Form.Group>
            <Header as="h3">
                    Physical Details
                </Header>
            <Form.Group id="physicalDetailsOne">
            <Form.Field>{ColorRandomizer()}</Form.Field>
                <Form.Field
                width={4}
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.hairColor = evt.target.value;
                update(copy);}}
                label="Hair Color"
                htmlFor="hairColor"
                placeholder="Hair Color"
                id="hairColor"
                />
                <Form.Field
                width={4}
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.eyeColor = evt.target.value;
                update(copy);}}
                label="Eye Color"
                htmlFor="eyeColor"
                placeholder="Eye Color"
                id="eyeColor"
                />
                </Form.Group>
                <Form.Group widths="equal" id="physicalDetailsTwo">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.skintone = evt.target.value;
                update(copy);}}
                label="Skintone"
                htmlFor="skintone"
                placeholder="Skintone"
                id="skintone"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.height = evt.target.value;
                update(copy);}}
                label="Height"
                htmlFor="height"
                placeholder="Height"
                id="height"
                />
            </Form.Group>
                <Form.Field
                control={TextArea}
                onChange={(evt) => {
                const copy = { ...character};
                copy.physicalDescription = evt.target.value;
                update(copy);}}
                label="Physical Description"
                htmlFor="physicalDescription"
                placeholder="Physical Description"
                id="physicalDescription"
                />
                <Form.Field
                control={TextArea}
                onChange={(evt) => {
                const copy = { ...character};
                copy.aestheticStyle = evt.target.value;
                update(copy);}}
                label="Aesthetic Style"
                htmlFor="aestheticStyle"
                placeholder="Aesthetic Style"
                id="aestheticStyle"
                />
                <Header as="h3">
                    Personality
                </Header>
            <Form.Group id="personalityDetailsOne">
                <Form.Field
                width={6}
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.characterTraits = evt.target.value;
                update(copy);}}
                label="Character Traits"
                htmlFor="characterTraits"
                placeholder="Character Traits"
                id="characterTraits"
                />
                <Form.Field>{CharacterTraitRandomizer()}</Form.Field>
                </Form.Group>
                <Form.Group widths="equal" id="personalityDetails">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.strengths = evt.target.value;
                update(copy);}}
                label="Strengths"
                htmlFor="strengths"
                placeholder="Strengths"
                id="strengths"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.weaknesses = evt.target.value;
                update(copy);}}
                label="Weaknesses"
                htmlFor="weaknesses"
                placeholder="Weaknesses"
                id="weaknesses"
                />
            </Form.Group>
            <Form.Group widths="equal" id="personalityLikesandDislikes">
            <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.likes = evt.target.value;
                update(copy);}}
                label="Likes"
                htmlFor="likes"
                placeholder="Likes"
                id="likes"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.dislikes = evt.target.value;
                update(copy);}}
                label="Dislikes"
                htmlFor="dislikes"
                placeholder="Dislikes"
                id="dislikes"
                />
            </Form.Group>
            <Form.Group widths="equal" id="personalityTraitsTwo">
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.specialSkills = evt.target.value;
                update(copy);}}
                label="Special Skills"
                htmlFor="specialSkills"
                placeholder="Special Skills"
                id="specialSkills"
                />
                <Form.Field
                control={Input}
                onChange={(evt) => {
                const copy = { ...character};
                copy.hobbies = evt.target.value;
                update(copy);}}
                label="Hobbies"
                htmlFor="hobbies"
                placeholder="Hobbies"
                id="hobbies"
                />
            </Form.Group>
            <Header as="h3">
                Narratives
            </Header>
            <Form.Field
                control={TextArea}
                onChange={(evt) => {
                const copy = { ...character};
                copy.characterNarrative = evt.target.value;
                update(copy);}}
                label="General Narrative"
                htmlFor="characterNarrative"
                placeholder="General Narrative"
                id="characterNarrative"
                />
                <Form.Field
                control={TextArea}
                onChange={(evt) => {
                const copy = { ...character};
                copy.relationshipNarrative = evt.target.value;
                update(copy);}}
                label="Relationship Narrative"
                htmlFor="relationshipNarrative"
                placeholder="Relationship Narrative"
                id="relationshipNarrative"
                />
            <Divider horizontal></Divider>
                <Form.Field 
                control={Button}
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                id="submit">Add New Character</Form.Field>
            <Segment></Segment>
        </Form>
        </>
    )
};