const url = "https://the-one-api.dev/v2/";
const bearer = "Bearer FdOHkBGLCc2PWl_eUb7Y";
class TheOneApi {
    
    static async getAllBooks(){
        try {
            const response = await fetch(url+"book", {
                method:"get",
                headers: new Headers({
                    Authorization: bearer,
                    "Content-Type": "application/json"
                }),
            });
    
            return response.json();
               
        } catch (error) {
            console.log(error.message);
        }
    }

    static async getAllLOTRCharacters(){
        try {
            const response = await fetch(url+"character", {
                method:"get",
                headers: new Headers({
                    Authorization: bearer,
                    "Content-Type": "application/json"
                }),
            });

            return  response.json();
        } catch (error) {
            
        }
    }
}

export default TheOneApi;