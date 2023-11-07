import React, { Fragment, useState } from "react";
import UsersServices from "../../Services/usersServices";

const CreateAccount = (props) => {

    let [pseudo, setPseudo] = useState();
    let [email, setEmail] = useState();
    let [pwd, setPwd] = useState();
    let [statusCode, setStatusCode] = useState();

    const handlerPseudo = (e) => {
        setPseudo(e.target.value);
      };

      const handlerEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handlerPwd = (e) => {
        setPwd(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        let body = {user:{
            pseudo: pseudo,
            password: pwd,
            emai: email
          }
        }

        console.log(body)
    }
    return (
        <Fragment>
        <form>
          <input type="text" placeholder="user" onChange={handlerPseudo} />
          <br />
          <input type="email" placeholder="email" onChange={handlerEmail} />
          <br />
          <input type="password" placeholder="password" onChange={handlerPwd} />
          <br />
          <input type="button" value="Submit" onClick={handleSubmit} />
        </form>
      </Fragment>
    )

}

export default CreateAccount;