import express from 'express';
import 'express-async-errors'  //FIx async error handllers
import { json } from 'body-parser';
import  mongoose  from 'mongoose';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
//error handeler
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
//middlewares
app.use(json());
app.all('*', () => {
  throw new NotFoundError();
});
app.use(errorHandler);


//routes
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
    console.log("Connected to DB");
    
  } catch (error) {
    console.log(error);
    
  }
  
  app.listen(3000, () => {
    console.log('Listening on port 3000.');
  });
}



start();