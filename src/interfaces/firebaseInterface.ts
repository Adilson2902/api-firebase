export default interface  FirebaseFunctions{

    SignInFirebase(email:string,password:string):Promise<any>,
    SignUpFirebase(dados:object,email:string,password:string):Promise<any>,
    RecordData(collection:string,data:object):Promise<any>,
    ReadDate(collection:string):Promise<any>
}



