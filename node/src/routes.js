import Router from 'express';
const routes = Router()
import MessageController from './controllers/MessageController'

routes.get('/messages', MessageController.index)

routes.post('/messages', MessageController.store)

export default routes