import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class UpdateFirestoreController{

    constructor( private UpdateFirestore: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { collection,doc,dataupdate } = req.body;
            var response;
            
            const respFirebase = await this.UpdateFirestore.UpdateData(doc,collection,dataupdate)

           
            response = res.status(200).send(respFirebase);

            
            
            return response;


        }catch(err){
            return res.status(400).send(err)
        }



    }


}