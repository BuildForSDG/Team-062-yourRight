import { Router } from 'express';

const router = Router();

export default (app) => app.use('/api/v1', router);
