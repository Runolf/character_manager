import React , {Fragment} from 'react';
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Characters from './Components/Characters/Characters';
import CharacterDetails from './Components/Characters/CharacterDetails';
import Homepage from './Components/Pages/homepage';
import NotFound from './Components/Pages/notFound';

const style = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
}

const Routeur = () => {

    const deconnect = () => {
        sessionStorage.removeItem('isGoodUser');
        window.location.reload();
    }

    return (  
        <Fragment>
            <BrowserRouter>
            <nav className="nav-router">
                <Link to="/" style={style}>
                    home
                </Link> {" "}

                {sessionStorage.getItem('isGoodUser') === "true" &&
                    <Fragment>
                        <Link to="/characters" style={style}>
                            myCharacters
                        </Link>
                        <input value="deconnect" type="button" onClick={deconnect} />
                    </Fragment>
 
                }
            </nav>
            
            <Routes>
              <Route path="/" element={<Homepage />} />
              
              <Route path="/characters" element={<Characters/>}/>
              <Route path="/characters/:id" element={<CharacterDetails/>}/>
                   
              <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
        </Fragment>
    );
}

export default Routeur;