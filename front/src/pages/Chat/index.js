import React, { useState, useEffect } from 'react';
import { ButtonSendMessage, Container, ContainerMessage, ContainerSendMessage, Divider, InputSendMessage, MessageText, TimeText, UserImage, Row } from './styles';
import { IoMdSend } from 'react-icons/io'
import { formatDistance } from 'date-fns'
import api from '../../services/api'

const Chat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const loadMessages = async () => {
      const response = await api.get('/messages');
      setMessages(response.data)
    }
    loadMessages()
  }, [])

  const handleSendMessage = async () => {
    if (message.length === 0) return;
    const response = await api.post('/messages', { text: message, url_user_image: 'https://media-exp1.licdn.com/dms/image/C5603AQFMh9IrS4NZLg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=U_lk8TtWeY2ZmTLAKpUTAdb8hqllCeIeKahaeuHBtjc', time: new Date() })
    setMessages([...messages, response.data])
    setMessage('')
  }

  return (
    <Container>
      {messages.map(message => (
        <ContainerMessage key={message.id}>
          <UserImage side='left' src={message.url_user_image} alt='profile' />
          <MessageText>{message.text}</MessageText>
          <TimeText>{formatDistance(new Date(message.time), new Date())} ago</TimeText>
        </ContainerMessage>
      ))}
      <ContainerSendMessage>
        <Divider />
        <Row>
          <InputSendMessage value={message} onChange={(e) => setMessage(e.target.value)} />
          <ButtonSendMessage onClick={(event) => { handleSendMessage(event) }}>
            <IoMdSend size={40} color="gray" />
          </ButtonSendMessage>
        </Row>
      </ContainerSendMessage>
    </Container>
  )
}

export default Chat;