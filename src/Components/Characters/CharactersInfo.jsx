import React , {Fragment} from 'react';
import './charactersInfo.css';

const CharactersInfo = (props) => {
    const character = props.character;
    
    /*
            "_id": "5cd99d4bde30eff6ebccfbbe",
            "height": "",
            "race": "Human",
            "gender": "Female",
            "birth": "",
            "spouse": "Belemir",
            "death": "",
            "realm": "",
            "hair": "",
            "name": "Adanel",
            "wikiUrl": "http://lotr.wikia.com//wiki/Adanel"
    */
    return (
        <Fragment>
            <div className='charactersInfoCard'>
                <h2>{character.firstname + " " + character.lastname} </h2>
                <h4>{character.job}</h4>
                <p>{character.race}</p>
                <p>{character.gender}</p>
                <p>{character.age} year </p>
                <p>{character.from}</p>
            </div>    
        </Fragment>
    );
}

export default CharactersInfo;