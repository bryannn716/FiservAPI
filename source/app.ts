
import express, {Application, Request, Response} from "express"
import middleware from "./middleware/middleware";
import postFunctions from "./functions/postFunctions";
import * as bodyParser from "body-parser"

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', (req: Request, res: Response)=>{
    res.send('Welcome to my Interview Project!');
});

app.post('/api/v1/parse', middleware.firstMiddleware, (req: Request, res: Response)=>{
    
    postFunctions.doRespond(res, req.body);
    
});

app.post('/api/v2/parse', middleware.secondMiddleware, (req: Request, res: Response)=>{
    
    postFunctions.doRespond(res, req.body);
    
});

app.listen(port, ()=> {
    console.log('Connection successful on ' + port)
});