import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class DeleteFirestoreController{

    constructor( private DeleteFirestore: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { collection,doc } = req.body;
            var response;
            
            const respFirebase = await this.DeleteFirestore.DeleteData(doc,collection)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}