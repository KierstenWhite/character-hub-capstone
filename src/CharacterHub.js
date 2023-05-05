import './CharacterHub.css';
import { NavBar } from './components/Navigation/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Authorization/Login';
import { Register } from './components/Authorization/Register';
import { Authorized } from './components/Views/Authorized';
import { ApplicationViews } from './components/Views/ApplicationViews';
import { Footer } from './components/Footer/Footer';

function CharacterHub() {
  return (
   
    <Routes>
      <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

          <Route path="*" element={
            <Authorized>
              <>
              <NavBar />
              <ApplicationViews />
              <Footer />
              </>
            </Authorized>
          } />
      </Route>
    </Routes>

  )
    
    
    
   
}

export default CharacterHub;


