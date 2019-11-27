/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';
// eslint-disable-next-line import/no-named-as-default
import User from './app/models/User';
import UserController from './app/controllers/UserController';

// eslint-disable-next-line import/no-named-as-default
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/test', async (req, res) => {
  const user = await User.create({
    name: 'qqqqq',
    email: 'asdasaadasaaaaaaad',
    password_hash: 'aaaaa',
  });

  res.json(user);
});

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);
export default routes;
