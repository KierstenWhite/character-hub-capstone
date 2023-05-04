import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetIndividualCharacterProfile, GetProfileAndReplace } from "./CharacterAPI";

export const EditCharacterForm = () => {
    const [character, editCharacter] = useState({
        firstName: ""
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
        <form className="ui form">
        <h4 className="ui dividing header">Edit Your Profile</h4>
            <div className="field">
                <h2>Name</h2>
                    <div className="name_fields">
                    <div className="six wide field">
                    <fieldset>
                        <div className="field">
                        <label htmlFor="firstName">First Name</label>
                        <textarea
                        required
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={character.firstName}
                        onChange={(evt) => {
                        const copy = { ...character };
                        copy.firstName = evt.target.value;
                        editCharacter(copy);
                        }}>{character.firstName}</textarea>
                        </div>
                    </fieldset>
                    </div>
                    </div>
                    </div>

                    <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                    className="ui button">Update Profile</button>
                    </form>
    )



}