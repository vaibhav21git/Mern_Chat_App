import React from 'react'
import axios from 'axios'
import {useEffect , useState} from 'react'

function Chatpage() {

  const [ chats , setchats] = useState([]);

  const fetchchats =  async () =>
  {
      const {data}  = await axios.get('/api/chat');

      setchats(data);
  }
  
  useEffect(() =>
    {
       fetchchats();
    } , [])
  



  return (
    <div>
    {chats.map((chat)=>(
    <div key = {chat._id}>{chat.chatName}</div>
  ))}
  </div>);
};


export default Chatpage