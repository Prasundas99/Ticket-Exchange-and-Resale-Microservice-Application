import express from 'express'
import { json } from 'body-parser'

//routes
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';

//middleware
import {errorHandler} from './middlewares/error-handler'


const app = express()
app.use(json());
app.use(errorHandler);

app.use(currentUserRouter);
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.listen(3000, () => {
    console.log('Listening on port 3000!');

})



//To open local deployed files
// c:\Windows\System32\Drivers\etc\hosts

//Process "thisisunsafe" when chrome blocks