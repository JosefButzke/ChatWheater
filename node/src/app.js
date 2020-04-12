import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import routes from './routes';
import io from 'socket.io'

class App {
  constructor() {
    this.app = express()
    this.server = http.createServer(this.app);
    mongoose.connect('mongodb+srv://josef:azsxd123@cluster0-hhapj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

    this.connectedUsers = {}
    this.socket()

    this.middlewares()
    this.routes()
  }

  socket() {
    this.io = io(this.server)
    this.io.on('connection', socket => {
      this.connectedUsers[socket.id] = { id: socket.id }
      socket.on('disconnect', () => {
        delete this.connectedUsers[socket.id]
      })
    })
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())

    this.app.use((req, res, next) => {
      req.io = this.io;
      req.connectedUsers = this.connectedUsers

      next()
    })
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().server;

