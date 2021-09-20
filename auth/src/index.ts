import express from 'express';
import { json } from 'body-parser';

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



app.listen(3000, () => {
  console.log('Listening on port 3000..');
});
