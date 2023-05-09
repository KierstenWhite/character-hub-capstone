import { Button, Label } from "semantic-ui-react";
import "./Character.css"
import { useState } from "react"



export const ColorRandomizer = () => {
    const [randomColor, setRandomColor] = useState(0)
    const [isShown, setIsShown] = useState(false)
    //Traits list acquired from https://litinfocus.com/100-character-traits-list-free-printable-pdf/
    const ColorList = ["Brunette", "Auburn", "Blonde", "Black", "Grey", "Silver", "White", "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Purple", "Pink", "Maroon", "Brown", "Beige", "Tan", "Peach", "Lime", "Olive", "Turquoise", "Teal", "Navy Blue", "Indigo", "Violet"]

    const generateRandomColor = (event) => {
        const randomColor = Math.floor(Math.random() * ColorList.length);
        setRandomColor(randomColor)
        setIsShown(true);
        event.preventDefault()
    }

    return (<>
            <Button onClick={(clickEvent) => generateRandomColor(clickEvent)}>Generate Random Color</Button>
            {isShown && (<Label pointing='left' basic color='purple'>{ColorList[randomColor]}</Label>)}
    </>)
}