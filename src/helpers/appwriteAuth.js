import { account, databases } from "../appwrite/appwriteConfig";
import { v4 as uuidv4 } from 'uuid';

export class AppwriteAuth {
    async createNewUser(email,password, name) {

        try {
            const response = await account.create(uuidv4(), email, password,name);
            console.log(response)
            
        try {
           return  {success:true, response:response}
        } catch (error) {
            return {success:false, error:error}
        }
            // will create a login session
            
        } catch (error) {
           // console.log("I am here")
           return {success:false, error:error}
        }
        

    }

    async loginUser(email,password){
        console.log("from login user")
        try {
            const session = await account.createEmailSession(email, password);
            return {success:true, session:session}
        } catch (error) {
            console.log("from login error")
            return {success:false,error:error};
        }
       
    }
}

const appwriteAuth = new AppwriteAuth;
export default appwriteAuth;