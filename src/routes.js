import { Router } from 'express';
import controllerSample from './app/controllers/controllerSample';

const routes = Router();

routes.post('/app', controllerSample.store);

export default routes;
