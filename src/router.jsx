import React , {Fragment} from 'react';
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Characters from './Components/Characters/Characters';
import CharacterDetails from './Components/Characters/CharacterDetails';
import NotFound from './Components/Pages/notFound';


const Routeur = () => {
    return (  
        <Fragment>
            <BrowserRouter>
            <nav>
                <Link to="/">
                    home
                </Link> {" "}
                <Link to="/characters">
                    myCharacters
                </Link>
            </nav>
            
            <Routes>
              <Route path="/" element={<main style={{ padding: "1rem" }}>
                <p>Homepage</p>
             </main>}/>
              
              <Route path="/characters" element={<Characters/>}/>
              <Route path="/characters/:id" element={<CharacterDetails/>}/>
                   
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        </Fragment>
    );
}

export default Routeur;