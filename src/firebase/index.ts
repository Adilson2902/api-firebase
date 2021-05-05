import { signinController } from '../controller/signInController'
import { signUpController } from '../controller/signUpController'
import { ReadFirestoreController } from '../controller/ReadFirestoreController'
import { RecordFirestoreController } from '../controller/RecordFirestoreController'

import { FirebaseApi } from '../repositories/firebaseLoginRepository'


const firebaseRepository = new FirebaseApi();
const signinControler = new signinController(firebaseRepository);
const signUpControler = new signUpController(firebaseRepository);
const ReadFirestoreControler = new ReadFirestoreController(firebaseRepository)
const RecordFirestoreControler = new RecordFirestoreController(firebaseRepository)


export {signinControler, signUpControler,ReadFirestoreControler,RecordFirestoreControler}


