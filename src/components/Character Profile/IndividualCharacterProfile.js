import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DeleteProfile, GetCharacterById } from "./CharacterAPI";

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
        return <button onClick={() => {
            DeleteProfile(characterId)
            .then(() => { navigate("/character_home")})
        }} className="ui button" id="profileDeleteButton">Delete Profile</button>
    }

    return <section className="character">
        <h1 className="characterProfile" key={`character--${character?.id}`}>{character?.firstName}</h1>
        <Link to={`/editCharacters/${character?.id}`}><button>Edit Profile</button></Link>
        {deleteButton()}
    </section>
}