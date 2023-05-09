import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetIndividualCharacterProfile, GetProfileAndReplace } from "./CharacterAPI";
import { Button, Divider, Form, Header, Input, Segment, TextArea } from "semantic-ui-react";
import { ColorRandomizer } from "./ColorRandomizer";
import { CharacterTraitRandomizer } from "./CharacterTraitRandomizer";

export const EditCharacterForm = () => {
    const [character, editCharacter] = useState({
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
    });

    const { characterId } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        GetIndividualCharacterProfile(characterId)
            .then((data) => {
                editCharacter(data);
            });
    }, [characterId]);

    const handleSaveButtonClick = (event) => {event.preventDefault()
    
     GetProfileAndReplace(character)
        .then(() => {
            navigate("/character_home")
        })   
    }

    return (
        <>
            <Form id="editCharacterForm">
                <Header as="h2">
                    Edit Character Form
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
                    editCharacter(copy);}}
                    label="First Name"
                    htmlFor="firstName"
                    value={character.firstName}
                    id="firstName"
                    required/>
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.middleName = evt.target.value;
                    editCharacter(copy);}}
                    label="Middle Name"
                    htmlFor="middleName"
                    value={character.middleName}
                    id="middleName"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.lastName = evt.target.value;
                    editCharacter(copy);}}
                    label="Last Name"
                    htmlFor="lastName"
                    value={character.lastName}
                    id="lastName"
                    required/>
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.firstNameEtymology = evt.target.value;
                    editCharacter(copy);}}
                    label="First Name Etymology"
                    htmlFor="firstNameEtymology"
                    value={character.firstNameEtymology}
                    id="firstNameEtymology"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.middleNameEtymology = evt.target.value;
                    editCharacter(copy);}}
                    label="Middle Name Etymology"
                    htmlFor="middleNameEtymology"
                    value={character.middleNameEtymology}
                    id="middleNameEtymology"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.lastNameEtymology = evt.target.value;
                    editCharacter(copy);}}
                    label="Last Name Etymology"
                    htmlFor="lastNameEtymology"
                    value={character.lastNameEtymology}
                    id="lastNameEtymology"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.nickname = evt.target.value;
                    editCharacter(copy);}}
                    label="Nickname"
                    htmlFor="nickname"
                    value={character.nickname}
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
                    editCharacter(copy);}}
                    label="Quote"
                    htmlFor="quote"
                    value={character.quote}
                    id="quote"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.characterImage = evt.target.value;
                    editCharacter(copy);}}
                    label="Character Image"
                    htmlFor="characterImage"
                    value={character.characterImage}
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
                    editCharacter(copy);}}
                    label="Species"
                    htmlFor="species"
                    value={character.species}
                    id="species"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.birthdayOrAge = evt.target.value;
                    editCharacter(copy);}}
                    label="Birthday and/or Age"
                    htmlFor="birthdayOrAge"
                    value={character.birthdayOrAge}
                    id="birthdayOrAge"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.nationalityEthnicity = evt.target.value;
                    editCharacter(copy);}}
                    label="Nationality and/or Ethnicity"
                    htmlFor="nationalityEthnicity"
                    value={character.nationalityEthnicity}
                    id="nationalityEthnicity"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.religiousAffiliation = evt.target.value;
                    editCharacter(copy);}}
                    label="Religious Affiliation"
                    htmlFor="religiousAffiliation"
                    value={character.religiousAffiliation}
                    id="religiousAffiliation"
                    />
                </Form.Group>
                <Form.Group widths="equal" id="basicProfileDetailsTwo">
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.gender = evt.target.value;
                    editCharacter(copy);}}
                    label="Gender Identity"
                    htmlFor="gender"
                    value={character.gender}
                    id="gender"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.sexualOrientation = evt.target.value;
                    editCharacter(copy);}}
                    label="Sexual Orientation"
                    htmlFor="sexualOrientation"
                    value={character.sexualOrientation}
                    id="sexualOrientation"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.playby = evt.target.value;
                    editCharacter(copy);}}
                    label="Playby or Faceclaim"
                    htmlFor="playby"
                    value={character.playby}
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
                    editCharacter(copy);}}
                    label="Hair Color"
                    htmlFor="hairColor"
                    value={character.hairColor}
                    id="hairColor"
                    />
                    <Form.Field
                    width={4}
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.eyeColor = evt.target.value;
                    editCharacter(copy);}}
                    label="Eye Color"
                    htmlFor="eyeColor"
                    value={character.eyeColor}
                    id="eyeColor"
                    />
                    </Form.Group>
                    <Form.Group widths="equal" id="physicalDetailsTwo">
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.skintone = evt.target.value;
                    editCharacter(copy);}}
                    label="Skintone"
                    htmlFor="skintone"
                    value={character.skintone}
                    id="skintone"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.height = evt.target.value;
                    editCharacter(copy);}}
                    label="Height"
                    htmlFor="height"
                    value={character.height}
                    id="height"
                    />
                </Form.Group>
                    <Form.Field
                    control={TextArea}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.physicalDescription = evt.target.value;
                    editCharacter(copy);}}
                    label="Physical Description"
                    htmlFor="physicalDescription"
                    value={character.physicalDescription}
                    id="physicalDescription"
                    />
                    <Form.Field
                    control={TextArea}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.aestheticStyle = evt.target.value;
                    editCharacter(copy);}}
                    label="Aesthetic Style"
                    htmlFor="aestheticStyle"
                    value={character.aestheticStyle}
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
                    editCharacter(copy);}}
                    label="Character Traits"
                    htmlFor="characterTraits"
                    value={character.characterTraits}
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
                    editCharacter(copy);}}
                    label="Strengths"
                    htmlFor="strengths"
                    value={character.strengths}
                    id="strengths"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.weaknesses = evt.target.value;
                    editCharacter(copy);}}
                    label="Weaknesses"
                    htmlFor="weaknesses"
                    value={character.weaknesses}
                    id="weaknesses"
                    />
                </Form.Group>
                <Form.Group widths="equal" id="personalityLikesandDislikes">
                <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.likes = evt.target.value;
                    editCharacter(copy);}}
                    label="Likes"
                    htmlFor="likes"
                    value={character.likes}
                    id="likes"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.dislikes = evt.target.value;
                    editCharacter(copy);}}
                    label="Dislikes"
                    htmlFor="dislikes"
                    value={character.dislikes}
                    id="dislikes"
                    />
                </Form.Group>
                <Form.Group widths="equal" id="personalityTraitsTwo">
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.specialSkills = evt.target.value;
                    editCharacter(copy);}}
                    label="Special Skills"
                    htmlFor="specialSkills"
                    value={character.specialSkills}
                    id="specialSkills"
                    />
                    <Form.Field
                    control={Input}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.hobbies = evt.target.value;
                    editCharacter(copy);}}
                    label="Hobbies"
                    htmlFor="hobbies"
                    value={character.hobbies}
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
                    editCharacter(copy);}}
                    label="General Narrative"
                    htmlFor="characterNarrative"
                    value={character.characterNarrative}
                    id="characterNarrative"
                    />
                    <Form.Field
                    control={TextArea}
                    onChange={(evt) => {
                    const copy = { ...character};
                    copy.relationshipNarrative = evt.target.value;
                    editCharacter(copy);}}
                    label="Relationship Narrative"
                    htmlFor="relationshipNarrative"
                    value={character.relationshipNarrative}
                    id="relationshipNarrative"
                    />
                <Divider horizontal></Divider>
                    <Form.Field 
                    control={Button}
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    id="submit">Save Edits</Form.Field>
                <Segment></Segment>
            </Form>
            </>
        )
}