import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/test', async (req, res) => {
  const user = await User.create({
    name: 'qqqqq',
    email: 'asdasaadasaaaaaaad',
    password_hash: 'aaaaa',
  });

  res.json(user);
});

export default routes;
