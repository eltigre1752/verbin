import { NextFunction, Request, Response, Router } from 'express';
import { Message, PlainObject } from '../_types';
import * as AuthService from '../services/authenticationService';

// ------------------------------------------MIDDLEWARES--------------------------------------------------
const parseUserAuthentication = (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.err) {
    res.locals.user = {
      email: req.body.email,
      name: req.body.name,
      address: req.body.address,
      password: req.body.password,
      phone: req.body.phone,
    };
  }
  return next();
};

// --------------------------------------------------ROUTE_DEFINTION--------------------------------------------------
const router = Router();

router.get('/', (req, res, next) => {
  let session = req.session as PlainObject;
  res.locals.msg = new Message(200, { authenticated: session.user ? true : false });
  return next();
});

router.post('/signup', parseUserAuthentication, (req, res, next) => {
  AuthService.signup(res.locals.user, (err, msg) => {
    if (err != null) res.locals.err = err;
    else {
      res.locals.msg = msg;
      req.session.regenerate(err => {
        if (err)
          res.locals.err = new Message(500, { error: 'error while updating session', detail: err });
      });
      (req.session as PlainObject).user = msg?.data.account;
    }
    return next();
  });
});

router.post('/signin', parseUserAuthentication, (req, res, next) => {
  AuthService.signin(res.locals.user, (err, msg) => {
    if (err != null) res.locals.err = err;
    else {
      res.locals.msg = msg;
      req.session.regenerate(err => {
        if (err)
          res.locals.err = new Message(500, { error: 'error while updating session', detail: err });
      });
      (req.session as PlainObject).user = msg?.data.account;
    }
    return next();
  });
});

router.get('/signout', (req, res, next) => {
  req.session.regenerate(err => {
    if (err) {
      res.locals.err = new Message(500, { error: 'Internal error while updating session' });
    } else {
      res.locals.msg = new Message(200, { message: 'user is logged out', authenticated: false });
    }
    return next();
  });
});

export { router as AuthRouter };
