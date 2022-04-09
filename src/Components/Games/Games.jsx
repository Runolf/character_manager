import React, { useState, useEffect, Fragment } from 'react';
import GamesList from '../../mock-datas/mock-games.json';
import Game from './GameInfo';
import './game.css';


const Games = () => {
    const [games, setGames] = useState([]);
    

    useEffect(() => {
        setGames(GamesList);
    }, [])

    return ( 
        <Fragment>
            <div className='gameInfoContainer'>
                {games.map((game) => {
                    return  <Game key={game.id} game={game}/>
                })}
            </div>

        </Fragment>
    )
}
 
export default Games;