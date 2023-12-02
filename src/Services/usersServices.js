import urls from "./urls";

const url = urls.url() + "users";
let user = {
    id: "",
    pseudo: "",
    email: "",
    isadmin: ""
}

class UsersServices {
    static connectUser(data){
        try {

            
        let res = fetch(url+"/connect", {
                method: "post",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
            });

            let datas = res.then((dude) => {
                user.id = dude.id;
                user.pseudo = dude.pseudo;
                user.isadmin = dude.isadmin;
                user.email = dude.email;

                return user;
            });

            return datas;
        } catch (error) {
            console.log("CONNECTION FAILED");
            console.log(error.message);
        }
    }

    static async createUser(data){
        try {
           var res = await fetch(url, {
                method:"post",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            });

            return res.json();
        } catch (error) {
            console.log("CREATION FAILED");
            console.log(error);
        }
    }

    static getConnectedUser(){
        let user = sessionStorage.getItem("user");
        if(user !== undefined){
            return JSON.parse(user);
        }
    }
}

export default UsersServices;