import { useState, useEffect } from "react";
import "./Character.css"
import { MyCharacterList } from "./CharacterHome";
import { GetCharacterInformation } from "./CharacterAPI";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const localCurrentUser = localStorage.getItem("current_user");
    const currentUserObject = JSON.parse(localCurrentUser)

    useEffect(
        () => {
            GetCharacterInformation()
            .then((characterArray) => {
                setCharacters(characterArray)
            });
        },
        []
    );

    return (
        <>
            <article className="characterHome">
                <h2>My Characters</h2>
                    {characters.map((characterObject) => (
                        <MyCharacterList
                        key={`character--${characterObject.id}`}
                        currentUser={currentUserObject}
                        characterObject={characterObject}
                        />
                    ))}
            </article>
        </>
    )
}