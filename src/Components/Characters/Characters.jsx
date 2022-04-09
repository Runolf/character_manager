import React, {Fragment, useEffect, useState} from 'react';
// import Theoneapi from "../../Services/theoneapi";
import CharactersInfo from './CharactersInfo';
import Pagination from '../Pagination/Pagination';
import MockChar from '../../mock-datas/mock-characters.json';

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [valueSubmit, setValueSubmit] = useState("");
    const [objSearch, setObjSearch] = useState(null);

    //for pagination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementPerPage] = useState(30);

    useEffect( () => {
        setLoading(true);
        /*
        Theoneapi.getAllLOTRCharacters()
        .then(data => {
            setCharacters(data.docs)
        })*/
        setCharacters(MockChar);
        setLoading(false);
    },[]);

    if(loading) return <h2>loading...</h2>;

    //pagination
    const indexOfLastElement = currentPage * elementPerPage;
    const indexOfFirstElement =  indexOfLastElement - elementPerPage;
    const currentElement = characters.slice(indexOfFirstElement, indexOfLastElement);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchCharacter = (e) => {
        // console.log(e.target.value);
        setValueSubmit(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const essai = currentElement.filter((obj) => {
            return obj.name === valueSubmit;
        });
        
        console.log(essai);

        setObjSearch(essai);
        
    }

    return (
        <Fragment>
            <h1>My characters</h1>
            <Pagination elementPerPage={elementPerPage} totalElement={characters.length} paginate={paginate} />

            <form>
                <input 
                    type="text" 
                    style={{width:"22%"}}
                    name="searchCharacter"
                    id="searchCharacter"
                    onChange={handleSearchCharacter}
                />

                <button onClick={handleSubmit} type="button">submit</button>
            </form>

            {objSearch != null ? 
                <CharactersInfo character={objSearch} />
                :
                <p>nothing</p>
            }

            <div
            className="characterListSmartphone"
            >
                {currentElement.map((char) => {
                        return <CharactersInfo key={char.id} character={char} />
                    })}
            </div>
            
        </Fragment>
    );
}

export default Characters;