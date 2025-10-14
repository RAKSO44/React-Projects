import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';

import './App.css'


function App(){

  useEffect(() => {
    Chatbot.addResponses({
      'nigga': `yo I didn't know u were chill like that`,
      'give me a unique id':`Sure! Here's a unique ID: ${crypto.randomUUID()}`    
    })
  }, []);
  
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  
  // const [chatMessages, setChatmessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return(
    <div className="app-container">
      {chatMessages.length === 0 
        && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />     
    </div>       
  );
}

export default App
