import { Outlet, Route, Routes } from "react-router-dom"
import { MyHubPage } from "../MyHub/MyHub"
import { AddANewCharacterForm } from "../Character Profile/CharacterForm"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
               

                <Outlet />
                </>
            }>

                <Route path="my_hub" element={ <MyHubPage />} />
                <Route path="add_a_new_character_form" element= { <AddANewCharacterForm />} />
            </Route>
        </Routes>





    )
}