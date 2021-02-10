import express from 'express';

import GitController from './controllers/GitController';

const routes = express.Router();
const gitController = new GitController();

routes.get('/apiGit', gitController.index);


export default routes;