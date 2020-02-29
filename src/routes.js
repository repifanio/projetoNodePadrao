import { Router } from 'express';

const routes = Router();

routes.get('/app', (req, res) => {
  res.json({ message: 'Isso é um modelo' });
});

export default routes;
