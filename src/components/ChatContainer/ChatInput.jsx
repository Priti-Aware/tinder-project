import React from 'react';
import './ChatContainer.css'
import { useState } from 'react';

const ChatInput = () => {
    const [textArea, setTextArea] = useState(null)

  return (
   <div className='chat-input'>
        <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
        <br/>
        <button className='secondary-button'>Submit</button>
   </div>
  );
}

export default ChatInput;
