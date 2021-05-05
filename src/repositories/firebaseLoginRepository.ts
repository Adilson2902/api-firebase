import FirebaseFunctions from "interfaces/firebaseInterface";
import firebase from '../config/firebase'

export class FirebaseApi implements FirebaseFunctions{

    

    async SignInFirebase(email:string,password:string){

        var response;    
        
        await firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => response =  {
                                    "type":"sucess",
                                    "message":"Logado com sucesso"
                                })
        .catch((err) =>{

            switch(err.code){
                case 'auth/invalid-email':
                    response =
                    {
                        "type":"error",
                        "message": "Email invalido , por favor verifique o formato do e-mail"
                    };
                break
                case 'auth/wrong-password':
                    response =
                    {
                        "type":"error",  
                        "message":"Senha Incorreta , por favor se digitou corretamente a senha"
                    };
                 break
                 case 'auth/user-not-found':
                    response = 
                    {
                        "type":"error",    
                        "message":"Usuario não existe , por favor faça o cadastro"
                    };
                 break
                 case 'auth/network-request-failed':
                    response = 
                    {
                        "type":"error",
                        "message":"Falha ao conectar , verifique a conexão com a internet"
                    };
                 break
                 case 'auth/argument-error':
                    response = 
                    {
                        "type":"error",
                        "message":"Verifique se digitou tudo corretamente"
                    };
                default:
                    response = err;
              }
        })


        return response;
    }

    

    async SignUpFirebase(dados:object,email:string,password:string){

        var response;
        
        await firebase.auth().createUserWithEmailAndPassword(email,password).then(

            async (value) =>{
              

                let uid = value.user.uid;
            
                response = 
                {
                    "type":"sucess",
                    "message":"Usuário Cadastrado com sucesso"
                }
              


                await firebase.database().ref("usuarios_api").child(uid).set(dados).then( () =>
                    response = 
                    {
                        "type":"sucess",
                        "message":"Usuário Cadastrado com sucesso"
                    }
                ).catch((err) =>{
                    response = 
                    {
                        "type":"error",
                        "message":err
                    }   
                })

               
              
                
            }

       
         


        ).catch((err) =>{

            switch(err.code){
                
                case 'auth/invalid-email':
                    response = 
                    {
                        "type":"error",
                        "message":"Email invalido , por favor verifique o formato do e-mail"
                    };
                break
                case 'auth/wrong-password':
                    
                    response = 
                    {
                        "type":"error",
                        "message":"Senha Invalida , por favor se digitou corretamente a senha com mais de 6 caracteres"
                    };
                 break
                 case 'auth/weak-password':
                    response = 
                    {
                        "type":"error",
                        "message":"Senha Fraca , por favor criar com outra senha"
                    };
                 break
                 case 'auth/email-already-in-use':
                    response = 
                    {
                        "type":"error",
                        "message":"E-mail em uso , por favor verifique se digitou corretamente o email"
                    };
                 break
                 case 'auth/network-request-failed':
                    response =   
                    {
                        "type":"error",
                        "message":"Falha ao conectar , verifique a conexão com a internet"
                    };
                 break
                default:
                    response = err;
              }
        })

        return response;
    }


 async   RecordData(collection:string,data:object){
    var response;
  

    await firebase.firestore().collection(collection).add({data}).then(
        () => response ={
            "type":"sucess",
            "message":"Dados mandado ao firestore com sucesso"
        }
    ).catch(err =>{
        response ={
            "type":"sucess",
            "message":err
        }
    }) 

    return response;

    }


    async ReadDate(collection:string){
        
        var pedido = []
        var response;
     

        await     firebase.firestore().collection(collection).get().then((resultado) =>{
            resultado.docs.forEach(doc =>{
             
              pedido.push({ 
                id: doc.id,
                ...doc.data()       
              })   
             
            })
            
            
          })

          response = {pedido};

          return response;
        }
    
   

}


