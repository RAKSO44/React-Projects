import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css';
import LoadingSpinner from '../assets/loading-spinner.gif'

export function ChatInput({ chatMessages, setChatMessages }){

      const [inputText, setInputText] = useState('');

      function saveInputText(event){
        setInputText(event.target.value);
      }

      function keyDown(event){
        if (event.key === 'Enter' && inputText){
          sendMessage();
        }
        if (event.key === 'Escape'){
          setInputText('');
        }
      }
    
      async function sendMessage(){

        setInputText('');

        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ]

        setChatMessages([
          ...newChatMessages,
          {
            message: <img 
              src={LoadingSpinner}
              className="loading-spinner"
            />,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);
      }

      return (
        <div className="chat-input-container">
          <input 
            placeholder = "Send a message to Chatbot" 
            size = "30" 
            onChange={saveInputText}
            onKeyDown={keyDown}
            value={inputText}
            className="chat-input"
          />
          <button
            onClick={sendMessage}
            className="send-button"
          >Send</button> 
        </div>
      );  
    }