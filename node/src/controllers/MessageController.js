import MessageSchema from '../models/MessageSchema'

const users = {
  josef: { path: 'https://media-exp1.licdn.com/dms/image/C5603AQFMh9IrS4NZLg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=U_lk8TtWeY2ZmTLAKpUTAdb8hqllCeIeKahaeuHBtjc' },
  camila: { path: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' },
}

class MessageController {
  async index(req, res) {
    const messages = await MessageSchema.find();

    return res.json(messages);
  }

  async store(req, res) {
    const { text, time, user } = req.body;
    console.log(user)
    const message = await MessageSchema.create({
      text, url_user_image: users[user].path, time, user: user
    });

    req.io.emit('chat', message)

    return res.json(message)
  }
}

export default new MessageController();