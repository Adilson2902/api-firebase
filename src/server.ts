import * as express from 'express';
import * as  cors from 'cors';
import routes from './routes';

require('dotenv').config();
var xmlparser = require( 'express-xml-bodyparser');


 


const app = express();
const PORT = process.env.PORT || 5001;



app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(routes)


 
app.listen(PORT , () =>{
    console.log(`Servidor está rodando na porta ${PORT}`);
});