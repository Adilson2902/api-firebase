import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class UploadStorageController{

    constructor( private UploadStorage: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { file,project } = req.body;
            var response;
            
            const respFirebase = await this.UploadStorage.StorageFirebase(file,project);

           
            response = res.status(200).send(respFirebase);

            
            
            return response;


        }catch(err){
            return res.status(400).send(err)
        }



    }


}