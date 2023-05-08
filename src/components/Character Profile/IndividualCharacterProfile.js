import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteProfile, GetCharacterById } from "./CharacterAPI";
import { Button, Card, Container, Grid, GridColumn, GridRow, Header, Image, Segment } from "semantic-ui-react";
import "./Character.css"

export const IndividualCharacterProfile = () => {
    const {characterId} = useParams()
    const [character, updateCharacter] = useState()
    const navigate = useNavigate()

    useEffect(
        () => {
            GetCharacterById(characterId)
                .then((data) => {
                    updateCharacter(data)
                })
        },
        [characterId]
    )

    const deleteButton = () => {
        return <Button onClick={() => {
            DeleteProfile(characterId)
            .then(() => { navigate("/character_home")})
        }} className="ui button" id="profileDeleteButton">Delete Profile</Button>
    }

    return (
        <>
        <Grid columns="equal" key={`character--${character?.id}`}>
            <GridRow>
                <Grid.Column width={12}>
                    <Segment>
                        <Header as="h2">
                            {character?.firstName} {character?.middleName} {character?.lastName}
                        </Header>
                        <Segment>
                            <p><strong>First Name Etymology:</strong> {character?.firstNameEtymology}</p>
                            <p><strong>Middle Name Etymology:</strong> {character?.middleNameEtymology}</p>
                            <p><strong>Last Name Etymology:</strong> {character?.lastNameEtymology}</p>
                        </Segment>
                        <Segment>
                        <Header as="h3">About {character?.firstName}</Header>
                        <p>{character?.characterNarrative}</p>
                        <Segment>
                        <p><strong>Character Traits:</strong> {character?.characterTraits}</p>
                        <p><strong>Strengths:</strong> {character?.strengths}</p>
                        <p><strong>Weaknesses:</strong> {character?.weaknesses}</p>
                        <p><strong>Likes:</strong> {character?.likes}</p>
                        <p><strong>Dislikes:</strong>{character?.dislikes}</p>
                        <p><strong>Special Skills:</strong>{character?.specialSkills}</p>
                        <p><strong>Hobbies:</strong>{character?.hobbies}</p>
                        </Segment>
                        </Segment>
                        <Segment>
                        <Header as="h3">Physical Description</Header>
                        <p>{character?.physicalDescription}</p>
                        <p>{character?.aestheticStyle}</p>
                        </Segment>
                        <Segment>
                        <Header as="h3">Relationships</Header>
                        <p>{character?.relationshipNarrative}</p>
                        </Segment>
                        </Segment>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>
                        <Card>
                            <Card.Content>
                        <Card.Header>
                        {character?.firstName} {character?.middleName} {character?.lastName}
                        </Card.Header>
                        <Image src={character?.characterImage}/>
                        <Card.Description>{character?.quote}</Card.Description>
                        <Segment>
                            <p><strong>Nickname(s):</strong> {character?.nickname}</p>
                            <p><strong>Species:</strong> {character?.species}</p>
                            <p><strong>Gender:</strong> {character?.gender}</p>
                            <p><strong>Sexual Orientation:</strong> {character?.sexualOrientation}</p>
                            <p><strong>Birthday and/or Age:</strong> {character?.birthdayOrAge}</p>
                            <p><strong>Birth Location:</strong> {character?.birthLocation}</p>
                            <p><strong>Nationality or Ethnicity:</strong> {character?.nationalityEthnicity}</p>
                            <p><strong>Religious Affiliation:</strong> {character?.religiousAffiliation}</p>
                        </Segment>
                        <Segment>
                            <p><strong>Playby/Faceclaim:</strong> {character?.playby}</p>
                            <p><strong>Hair Color:</strong> {character?.hairColor}</p>
                            <p><strong>Eye Color:</strong> {character?.eyeColor}</p>
                            <p><strong>Skintone:</strong> {character?.skintone}</p>
                            <p><strong>Height:</strong> {character?.height}</p>
                        </Segment>
                        </Card.Content>
                        </Card>
                    </Segment>
                </Grid.Column>
            </GridRow>
        </Grid>
        <Link to={`/editCharacters/${character?.id}`}><Button id="editProfileButton">Edit Profile</Button></Link> {deleteButton()}
        <Segment></Segment>
        <Segment></Segment>
        </>
    )
}

// <section className="character">
    //     <h1 className="characterProfile" key={`character--${character?.id}`}>{character?.firstName}</h1>
        
    // </section>