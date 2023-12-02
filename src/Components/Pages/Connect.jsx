import React, { Fragment, useState } from "react";
import UsersServices from "../../Services/usersServices";

const Connect = (props) => {

  let [pseudo, setPseudo] = useState();
  let [pwd, setPwd] = useState();
  let [statusCode, setStatusCode] = useState();

  let [connectUser, setConnectUser] = useState({
    pseudo: "",
    pwd: "",
  });

  const handlerPseudo = (e) => {
    setPseudo(e.target.value);
  };

  const handlerPwd = (e) => {
    setPwd(e.target.value);
  };

  const isUserExists = (status, body) => {
    if (status !== undefined) {
      if(status == "200") { 
        sessionStorage.setItem("isGoodUser", true);
        sessionStorage.setItem("user", JSON.stringify(body));
        //window.location.reload();
      }
    }
  };

  const handleGoCreateAccount = () => {
    window.location.replace("/create_account");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    let body = {user:{
        pseudo: pseudo,
        password: pwd,
      }
    }

    setConnectUser(body);

    if (connectUser !== undefined) {
      
      /*
      UsersServices.connectUser(connectUser).then(result => {
      console.log('in then');
      console.log(result.json());
      setStatusCode(result.status);
    });
    */
    let dude = UsersServices.connectUser(connectUser);
    console.log(dude);
    
    //console.log("statusCode state");
    //console.log(statusCode);

    //isUserExists(statusCode, body);
    //let user = JSON.parse(sessionStorage.getItem("user"));
   // console.log(user);
    
    }
  };

  return (
    <Fragment>
      <form>
        <input type="text" placeholder="user" onChange={handlerPseudo} />
        <br />
        <input type="password" placeholder="password" onChange={handlerPwd} />
        <br />
        <input type="button" value="Submit" onClick={handleSubmit} />
        <input type="button" value="No account?" onClick={handleGoCreateAccount}/>
      </form>
    </Fragment>
  );
};

export default Connect;