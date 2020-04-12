import React, { useState, useEffect } from 'react';
import { ButtonSendMessage, Container, ContainerMessages, ContainerMessage, ContainerSendMessage, Divider, InputUserName, InputSendMessage, MessageText, TimeText, UserImage, Row } from './styles';
import { IoMdSend } from 'react-icons/io'
import { formatDistance } from 'date-fns'
import api from '../../services/api'
import { socket } from '../../services/webSocket'

const Chat = () => {
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const loadMessages = async () => {
      const response = await api.get('/messages');
      setMessages(response.data)
    }
    loadMessages()

  }, [])

  useEffect(() => {
    socket.disconnect()
    socket.connect()
    socket.on('chat', mess => { setMessages([...messages, mess]) })
  }, [messages])

  const handleSendMessage = async () => {
    if (message.length === 0) return;
    await api.post('/messages', {
      text: message,
      time: new Date(),
      user: user
    })

    setMessage('')
  }

  return (
    <Container>
      <ContainerMessages>
        {messages.map((message, index) => (
          <ContainerMessage key={index}>
            <UserImage side={user === message.user ? 'left' : 'right'} src={message.url_user_image} alt='profile' />
            <MessageText>{message.text}</MessageText>
            <TimeText>{formatDistance(new Date(message.time), new Date())} ago</TimeText>
          </ContainerMessage>
        ))}
      </ContainerMessages>
      <ContainerSendMessage>
        <Divider />
        <Row>
          <InputUserName value={user} onChange={(e) => setUser(e.target.value)} />
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