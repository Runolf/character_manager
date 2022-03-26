import React, {Fragment, useEffect, useState} from 'react';
import Theoneapi from "../../Services/theoneapi";
import CharactersInfo from './CharactersInfo';
import Pagination from '../Pagination/Pagination';

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    //for pagination
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementPerPage] = useState(30);

    useEffect( () => {
        setLoading(true);
        Theoneapi.getAllLOTRCharacters()
        .then(data => {
            setCharacters(data.docs)
        })
        setLoading(false);
    },[]);

    if(loading) return <h2>loading...</h2>;

    //pagination
    const indexOfLastElement = currentPage * elementPerPage;
    const indexOfFirstElement =  indexOfLastElement - elementPerPage;
    const currentElement = characters.slice(indexOfFirstElement, indexOfLastElement);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Fragment>
            <h1>My characters</h1>
            <div style={{display:"flex", 
                        flexDirection: "row",
                        flexWrap:"wrap",
                        justifyContent:"center",
                        alignContent:"center"}}>
                {currentElement.map((char) => {
                        return <CharactersInfo key={char._id} character={char} />
                    })}
            </div>
            <Pagination elementPerPage={elementPerPage} totalElement={characters.length} paginate={paginate} />
        </Fragment>
    );
}

export default Characters;