import { signinController } from '../controller/signInController'
import { signUpController } from '../controller/signUpController'
import { ReadFirestoreController } from '../controller/ReadFirestoreController'
import { RecordFirestoreController } from '../controller/RecordFirestoreController'
import { UpdateFirestoreController }  from '../controller/UpdateFirestoreController'
import { DeleteFirestoreController} from '../controller/DeleteFirestoreController'
import { UpdateDataRealtimeController }  from '../controller/UpdateRealtimeController'
import { FirebaseApi } from '../repositories/firebaseLoginRepository'
import { ReadRealtimeController } from '../controller/ReadRealtimeController'


const firebaseRepository = new FirebaseApi();
const signinControler = new signinController(firebaseRepository);
const signUpControler = new signUpController(firebaseRepository);
const ReadFirestoreControler = new ReadFirestoreController(firebaseRepository)
const RecordFirestoreControler = new RecordFirestoreController(firebaseRepository)
const UpdateFirestoreControler = new UpdateFirestoreController (firebaseRepository)
const DeleteFirestoreControler = new DeleteFirestoreController(firebaseRepository)
const UpdateDataRealtimeControler = new UpdateDataRealtimeController(firebaseRepository)
const ReadRealtimeControler = new ReadRealtimeController(firebaseRepository)


export {signinControler, ReadRealtimeControler,signUpControler,UpdateDataRealtimeControler,ReadFirestoreControler,RecordFirestoreControler, DeleteFirestoreControler,UpdateFirestoreControler}


