import { Button, Label, Message } from "semantic-ui-react";
import "./Character.css"
import { useState } from "react"



export const CharacterTraitRandomizer = () => {
    const [randomTrait, setRandomTrait] = useState(0)
    const [isShown, setIsShown] = useState(false)
    //Traits list acquired from https://litinfocus.com/100-character-traits-list-free-printable-pdf/
    const characterTraitsList = ["active", "adventurous", "afraid", "angry", "artistic", "bold", "bossy", "brilliant", "busy", "determined", "dishonest", "disrespectful", "dull", "energetic", "fair", "friendly", "fun", "funny", "generous", "lazy", "logical", "lonely", "loud", "loving", "loyal", "lucky", "mature", "mean", "mischievous", "proud", "quiet", "respectful", "responsible", "rude", "sad", "selfish", "sensitive", "serious", "shy", "calm", "careful", "caring", "cautious", "charming", "cheerful", "clumsy", "confident", "confused", "cooperative", "gentle", "gloomy", "greedy", "happy", "helpful", "honest", "hopeful", "humble", "humorous", "hyper", "mysterious", "nervous", "nice", "noisy", "nosy", "obnoxious", "optimistic", "organized", "outgoing", "patient", "silly", "smart", "sneaky", "spoiled", "successful", "sweet", "talented", "talkative", "thoughtful", "timid", "creative", "cruel", "curious", "daring", "demanding", "imaginative", "immature", "impatient", "intelligent", "jealous", "peaceful", "persuasive", "playful", "polite", "popular", "tolerant", "trustworthy", "unkind", "wild", "wise"]

    const generateRandomTrait = (event) => {
        const randomTrait = Math.floor(Math.random() * characterTraitsList.length);
        setRandomTrait(randomTrait)
        setIsShown(true);
        event.preventDefault()
    }

    return (<>
            <Button onClick={(clickEvent) => generateRandomTrait(clickEvent)}>Generate Random Character Trait</Button>
            {isShown && (<Label pointing='left' basic color='purple'>{characterTraitsList[randomTrait]}</Label>)}
    </>)
}

// const handleSaveButtonClick = (event) => {
//     event.preventDefault();