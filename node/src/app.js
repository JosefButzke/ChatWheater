import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import routes from './routes';
import io from 'socket.io'

class App {
  constructor() {
    this.app = express()
    this.server = http.Server(this.app);
    mongoose.connect('mongodb+srv://josef:azsxd123@cluster0-hhapj.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

    this.socket()

    this.middlewares()
    this.routes()

    this.connectedUsers = {}

  }

  socket() {
    this.io = io(this.server)
    this.io.on('connection', socket => {
      const { user_id } = socket.handshake.query;
      this.connectedUsers[user_id] = socket.id

      socket, on('disconnect', () => {
        this.connectedUsers[user_id];
      })
    })
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())

    // this.app(use(req, res, next) => {
    //   req.io = this.socket 
    //   req.connectedUsers = this.connectedUsers
    // })
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app;

