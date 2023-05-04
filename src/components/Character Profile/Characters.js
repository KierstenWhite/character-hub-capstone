import { useState, useEffect } from "react";
import "./Character.css"
import { CharacterHomeList } from "./CharacterHomeList";
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
                    {characters.map((character) => 
                        <CharacterHomeList 
                        key={`character--${character.id}`}
                        currentUser={currentUserObject}
                        character={character}
                        />
                    )}
            </article>
        </>
    )
}