import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class UpdateDataRealtimeController{

    constructor( private UpdateDataRealtime: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{

            const { uid,dataupdate,bd, type } = req.body;
            var response;

            if (type == 'xml'){
                res.set('Content-Type', 'text/xml');
            }
            
            const respFirebase = await this.UpdateDataRealtime.UpdateDataRealtime(uid,dataupdate,bd, type)
           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}