import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class RecordFirestoreController{

    constructor( private RecordFirestore: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { collection,data} = req.body;
            var response;
            
            const respFirebase = await this.RecordFirestore.RecordData(collection,data)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}