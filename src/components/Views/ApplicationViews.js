//Handles all routes for application

import { Outlet, Route, Routes } from "react-router-dom"
import { MyHubPage } from "../MyHub/MyHub"
import { AddANewCharacterForm } from "../Character Profile/CharacterForm"
import { Characters } from "../Character Profile/Characters"
import { IndividualCharacterProfile } from "../Character Profile/IndividualCharacterProfile"
import { EditCharacterForm } from "../Character Profile/EditCharacterForm"
import { Home } from "../Home/Home"
import { EditUserProfile } from "../Profile/EditUserProfile"
import { WritingResourceContainer } from "../Writing Resources/WritingResourceContainer"
import { SubmitWritingResourcesForm } from "../Writing Resources/SubmitWritingResourcesForm"
import { EditSubmittedWritingResourcesForm } from "../Writing Resources/EditSubmittedWritingResources"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <Outlet />
                </>
            }>
                <Route path="/" element={ <Home />} />
                <Route path="my_hub" element={ <MyHubPage />} />
                <Route path="add_a_new_character_form" element={ <AddANewCharacterForm />} />
                <Route path="character_home" element={<Characters />} />
                <Route path="characters/:characterId" element={<IndividualCharacterProfile/>} />
                <Route path="editCharacters/:characterId" element={<EditCharacterForm />} />
                <Route path="profile" element={ <EditUserProfile/>} />
                <Route path="writing_resources" element={ <WritingResourceContainer />} />
                <Route path="submit_new_writing_resource" element={ <SubmitWritingResourcesForm />} />
                <Route path="edit_writing_resource/:resourceId" element={<EditSubmittedWritingResourcesForm />} />
             </Route>
        </Routes>

    )
}