import { Router } from 'express';

import BloodCenterRouter from './bloodCenter.routes';
import UsersRouter from './users.routes';

const routes = Router();

routes.use('/bloodcenter', BloodCenterRouter);
routes.use('/users', UsersRouter);


export default routes;