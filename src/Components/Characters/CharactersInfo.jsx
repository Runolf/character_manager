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
                <h3>{character.name}</h3>
                <p>{character.race}</p>
                <p>{character.gender}</p>
                <p>{character.birth}</p>
                <p>{character.realm}</p>
            </div>    
        </Fragment>
    );
}

export default CharactersInfo;