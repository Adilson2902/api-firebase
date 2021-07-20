import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class signinGoogleController{

    constructor( private SignInGoogleFirebase: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { email, password, bd} = req.body;

            
            
            var response;
            
            const respFirebase = await this.SignInGoogleFirebase.SignInGoogle()

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}