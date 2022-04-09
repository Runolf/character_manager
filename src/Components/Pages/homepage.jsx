import React, {Fragment, useEffect, useState } from 'react';
import Games from '../Games/Games';
import Connect from './Connect';

const Homepage = () => {
    
    const [isGoodUser, setIsGoodUser] = useState();

    useEffect(() => {
        let isGood = (sessionStorage.getItem('isGoodUser') == "true")?true:false;
        setIsGoodUser(isGood);
    }, [])


    return (  
        <Fragment>
            <h1>Homepage</h1>
            {isGoodUser === true? 
                <Games />
                :
                <Connect />

            }
        </Fragment>
    );
}
 
export default Homepage;