import React , {Fragment, useEffect, useState} from 'react';
import Users from '../../mock-datas/mock-users.json';


const Connect = (props) => {

    const [users] = useState(Users);

    let [pseudo, setPseudo] = useState();
    let [pwd, setPwd] = useState();
    
    let [connectUser, setConnectUser] = useState({
        pseudo: "",
        pwd :""
    });

    const handlerPseudo = (e) => {
        setPseudo(e.target.value);
    }

    const handlerPwd = (e) => {
        setPwd(e.target.value);
    }

    const isUserExists = (userTryConnect) => {
      
      if(userTryConnect !== undefined){

        let guy = users.find(user =>  user.pseudo === userTryConnect.pseudo );
           // console.log(userTryConnect)
            if(guy.pwd === userTryConnect.pwd) {
                sessionStorage.setItem('isGoodUser', true);
                return true;
            }
        
            return false;
        }

    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setConnectUser(
            {
                pseudo: pseudo,
                pwd: pwd
            }
        );
        
        if(connectUser !== undefined) {
            let test = isUserExists(connectUser);
            //console.log(test);
        
        }


        
    }

    return (
        <Fragment>
            <form>
                <input type="text" placeholder='user' onChange={handlerPseudo}/> 
                <br />
                <input type="password" placeholder='password' onChange={handlerPwd}/>       
                <br />
                <input type="button" value="Submit" onClick={handleSubmit}/>         
            </form>

            {connectUser ? 
                connectUser.pseudo : <p>nope</p>
            }
        </Fragment>
    );
}
 
export default Connect;