import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: white;
  flex-direction: column;
  align-items: flex-end;
`;


export const ContainerMessages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerMessage = styled.div`
  display: flex;
  width: 350px;

  @media screen and (max-width: 400px)  {
    width: 85%;
  }

  background: white;
  flex-direction: column;
  justify-content: center;
  padding: 25px 40px 25px 60px;
  margin: 30px;
  position: relative;
  box-shadow: 0 0 15px 0 gray;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  position: absolute;
  align-self: flex-end;
  ${props => props.side === 'left' ? { left: '-20px' } : { right: '-20px' }};
  top: -20px;
  box-shadow: 0 0 15px 0 gray;
`;

export const MessageText = styled.p`
  color: gray;
  text-align: left;
`;

export const TimeText = styled.p`
  color: #bbb;
  margin-top: 15px;
`;

export const ContainerSendMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: white;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #eee;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 50px;
`;

export const InputUserName = styled.input.attrs({
  placeholder: 'User Name',
})`
  display: flex;
  flex: 2;
  height: 50px;
  border: 1px solid #ddd;
  padding: 0 20px;
  margin: 0 10px;
  box-shadow: 0 0 5px 0 #bbb;
  
  ::placeholder {
    color: #ccc;
  }
`;

export const InputSendMessage = styled.input.attrs({
  placeholder: 'Message'
})`
  display: flex;
  flex: 10;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ddd;
  padding: 0 20px;
  box-shadow: 0 0 5px 0 #bbb;

  ::placeholder {
    color: #ccc;
  }
`;

export const ButtonSendMessage = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  margin: 0 20px;
  border: none;
  cursor: pointer;
`;