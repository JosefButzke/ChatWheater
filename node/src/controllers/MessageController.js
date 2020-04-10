import MessageSchema from '../models/MessageSchema'

class MessageController {
  async index(req, res) {
    const messages = await MessageSchema.find();

    return res.json(messages);
  }

  async store(req, res) {
    const { text, url_user_image, time } = req.body;

    const message = await MessageSchema.create({
      text, url_user_image, time
    });

    return res.json(message)
  }
}

export default new MessageController();