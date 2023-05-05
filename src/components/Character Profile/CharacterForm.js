import { useState } from "react"
import './Character.css'
import { useNavigate } from "react-router-dom";
import { GetNewCharacterFormAndSend } from "./CharacterAPI";

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
    <form className="ui form">
        <h4 className="ui dividing header">Basic Details</h4>
            <div className="field">
                <h2>Name</h2>
                    <div className="name_fields">
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="firstName"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={character.firstName}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.firstName = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="one wide field"></div>
                    <div className="seven wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="firstNameEtymology"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First Name Etymology"
                        value={character.firstNameEtymology}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.firstNameEtymology = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="middleName"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Middle Name"
                        value={character.middleName}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.middleName = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="one wide field"></div>
                    <div className="seven wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="middleNameEtymology"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Middle Name Etymology"
                        value={character.middleNameEtymology}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.middleNameEtymology = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="lastName"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={character.lastName}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.lastName = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="one wide field"></div>
                    <div className="seven wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="lastNameEtymology"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Last Name Etymology"
                        value={character.lastNameEtymology}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.lastNameEtymology = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="nickname"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Nickname(s)"
                        value={character.nickname}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.nickname = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    </div>
                    <h2>Character Profile Display</h2>
                    <div className ="profile_dressing_fields">
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="quote"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Quote"
                        value={character.quote}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.quote = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    <div className="one wide field"></div>
                    <div className="seven wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="characterImage"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Post a link to an image that best represents your character"
                        value={character.characterImage}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.characterImage = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
                    </div>
                    <div className="basic_details_fields">
                    <label>Basic Details</label>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="species"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Species"
                        value={character.species}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.species = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="birthdayOrAge"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Birthday and/or Age"
                        value={character.birthdayOrAge}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.birthdayOrAge = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="birthLocation"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Birth Location"
                        value={character.birthLocation}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.birthLocation = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="nationalityEthnicity"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Nationality/Ethnicity"
                        value={character.nationalityEthnicity}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.nationalityEthnicity = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="religiousAffiliation"
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Religious Affiliation"
                        value={character.religiousAffiliation}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.religiousAffiliation = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="gender"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Gender Identity"
                        value={character.gender}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.gender = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="sexualOrientation"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Sexual Orientation"
                        value={character.sexualOrientation}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.sexualOrientation = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="playby"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Playby"
                        value={character.playby}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.playby = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="hairColor"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hair Color"
                        value={character.hairColor}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.hairColor = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="eyeColor"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Eye Color"
                        value={character.eyeColor}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.eyeColor = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="skintone"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Skintone and Description"
                        value={character.species}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.species = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="height"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Height (specify unit of measurement)"
                        value={character.height}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.height = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="physicalDescription"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Physical Description"
                        value={character.physicalDescription}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.physicalDescription = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="aestheticStyle"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Aesthetic Style"
                        value={character.aestheticStyle}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.aestheticStyle = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="characterTraits"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Character Traits"
                        value={character.characterTraits}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.characterTraits = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="strengths"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Strengths"
                        value={character.strengths}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.strengths = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="weaknesses"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Weaknesses"
                        value={character.weaknesses}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.weaknesses = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="likes"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Likes"
                        value={character.likes}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.likes = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="dislikes"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Dislikes"
                        value={character.dislikes}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.dislikes = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="specialSkills"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Special Skills"
                        value={character.specialSkills}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.specialSkills = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="hobbies"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hobbies"
                        value={character.hobbies}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.hobbies = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="characterNarrative"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Narrative"
                        value={character.characterNarrative}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.characterNarrative = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="relationshipsNarrative"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Relationship Narrative (Romantic, Familial, Friendships, Enemies, etc.)"
                        value={character.relationshipNarrative}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.relationshipNarrative = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="field">
                        <label htmlFor="dateCreated"></label>
                        <input
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Date Created"
                        value={character.dateCreated}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.dateCreated = evt.target.value;
                        update(copy);
                        }}
                        />
                        </div>
                    </fieldset>
                    </div>
            </div>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="ui button" type="submit">
                Add New Character
            </button>
    </form>
    );
};