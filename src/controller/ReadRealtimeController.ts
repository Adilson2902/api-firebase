import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class ReadRealtimeController{

    constructor( private ReadRealtime: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{
            
            const { bd,uid } = req.body;
            var response;
         
            const respFirebase = await this.ReadRealtime.ReadRealtime(bd,uid)

           
            response = res.status(200).send(respFirebase);

            
            
            return response


        }catch(err){
            return res.status(400).send(err)
        }



    }


}