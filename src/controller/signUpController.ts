import { Request,Response } from 'express'
import { FirebaseApi} from '../repositories/firebaseLoginRepository'

export class signUpController{

    constructor( private SignUpFirebase: FirebaseApi){

    }

    
    async handle(req:Request, res:Response):Promise<Response>{

        try{
            const { email, password,dados} = req.body

        if(dados && email && password)
          {
            var response;
            
            const respFirebase = await this.SignUpFirebase.SignUpFirebase(dados,email,password)
         
            response = res.status(200).send(respFirebase);

            
            
            return response
          }else{

            response  = res.status(200).send({"type":"error", "message":"Por favor Verifique se todos os campos pedidos foram preenchidos"})
          }


        }catch(err){
            return res.status(400).send(err)
        }



    }


}