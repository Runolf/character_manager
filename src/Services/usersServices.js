import urls from "./urls";

const url = urls.url() + "users";

class UsersServices {
    static connectUser(data){
        try {
         var res = fetch(url+"/connect", {
                method: "post",
                mode: "cors",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
            });
            
            return res.then((res => {
                return res.status;
            }))
        } catch (error) {
            console.log("CONNECTION FAILED");
            console.log(data);
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
}

export default UsersServices;