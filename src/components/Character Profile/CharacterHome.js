import { useNavigate } from "react-router-dom";
import "./Character.css"

export const MyCharacterList = ({ characterObject, currentUser }) => {
    const navigate = useNavigate()

    return characterObject.userId === currentUser.id
    ? ("")
    : ("")
}