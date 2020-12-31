import express from 'express';
import compression from 'compression';
import fileupload from 'express-fileupload';
import cors from './services/cors';
import sessionManager from './services/sessionManager';
import { Message } from './_types';
import { AuthRouter } from './routers/auth';
import { PostRouter } from './routers/post';

const app = express();

app.use(fileupload());
app.use(compression());
app.use(cors);
app.use(sessionManager);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', AuthRouter);
app.use('/post', PostRouter);

app.get('/', (_, res, next) => {
  res.locals.msg = new Message(200, { message: 'Hello' });
  return next();
});

// Default error handler
app.use((_, res, next) => {
  if (res.locals.err) {
    const error = res.locals.err as Message;
    console.log();
    console.log('//--------------------------//');
    console.error(`ENCOUNTER ERROR:`);
    console.error(error.data);
    console.log('//--------------------------//');
    console.log();

    return res.status(error.status).json(error.data);
  }
  return next();
});
// Send response message if no error
app.use((_, res) => {
  if (!res.locals.err) {
    const response = res.locals.msg as Message;
    return res.status(response.status).json(response.data);
  }
});

export default app;
