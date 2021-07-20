import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class MessagingFirebaseController{

    constructor( private MessaginFirebase: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { text,to } = req.body;
            var response;
            
            const respFirebase = await this.MessaginFirebase.sendMessage(text,to)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}