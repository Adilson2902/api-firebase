import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class signinController{

    constructor( private SignInFirebase: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { email, password} = req.body;

            
            
            var response;
            
            const respFirebase = await this.SignInFirebase.SignInFirebase(email,password)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}