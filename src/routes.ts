import { Request, Response, Router } from 'express';
import { signUpControler, signinControler,ReadFirestoreControler,RecordFirestoreControler,UpdateFirestoreControler,DeleteFirestoreControler}  from './firebase/index'

const routes = Router();



routes.get("/",(req:Request,res:Response) =>{

    res.send("Api Firebase");
})

routes.get("/signin", async (req:Request,res:Response) =>{
    try{

        signinControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})

routes.get("/signup", async (req:Request,res:Response) =>{
    try{

        signUpControler.handle(req,res);
     
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

routes.get("/readfirestore", async (req:Request,res:Response) =>{
    try{

        ReadFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})


routes.get("/updatefirestore", async (req:Request,res:Response) =>{
    try{

        UpdateFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})



routes.get("/deletefirestore", async (req:Request,res:Response) =>{
    try{

        DeleteFirestoreControler.handle(req,res);
     
    }catch(err){
        console.log(err)
    }
})




export default routes;