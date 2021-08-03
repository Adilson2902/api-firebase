import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'
export class ScoreGameController{

    constructor( private ScoreRepositories: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { collection,doc,data } = req.body;
            var response;
            
            const respFirebase = await this.ScoreRepositories.recordFirestoreDoc(collection,doc,data);

           
            response = res.status(200).send(respFirebase);

            
            
            return response;


        }catch(err){
            return res.status(400).send(err)
        }



    }


}
