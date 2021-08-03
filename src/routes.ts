import { Request, Response, Router } from 'express';
import { signUpControler, RecordeFirestoreDocControler,signinControler,UpdateDataRealtimeControler,ReadFirestoreControler,RecordFirestoreControler,UpdateFirestoreControler,DeleteFirestoreControler, ReadRealtimeControler}  from './firebase/index'

const routes = Router();



routes.get("/",(req:Request,res:Response) =>{

    res.send("Api Firebase");
})

routes.post("/signin", async (req:Request,res:Response) =>{
    try{
      
        signinControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})



routes.post("/firestoredoc", async (req:Request,res:Response) =>{
    try{
      
        RecordeFirestoreDocControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})
routes.post("/signup", async (req:Request,res:Response) =>{
    try{

        signUpControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})

routes.post("/updateuser", async (req:Request,res:Response) =>{
    try{

        UpdateDataRealtimeControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})



routes.post("/recordfirestore", async (req:Request,res:Response) =>{
    try{

        RecordFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})

routes.post("/readfirestore", async (req:Request,res:Response) =>{
    try{

        ReadFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})




routes.post("/updatefirestore", async (req:Request,res:Response) =>{
    try{

        UpdateFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})



routes.post("/deletefirestore", async (req:Request,res:Response) =>{
    try{

        DeleteFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})


routes.post("/readrealtime", async (req:Request,res:Response) =>{
    try{
     
        ReadRealtimeControler.handle(req,res);
  
    }catch(err){
        console.log(err)
    }
})


export default routes;