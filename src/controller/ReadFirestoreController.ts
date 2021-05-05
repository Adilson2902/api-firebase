import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class ReadFirestoreController{

    constructor( private ReadFirestore: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { collection } = req.body;
            var response;
            
            const respFirebase = await this.ReadFirestore.ReadDate(collection)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}