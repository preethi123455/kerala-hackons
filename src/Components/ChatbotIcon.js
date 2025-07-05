import React from 'react';

const ChatbotIcon = () => (
  <div style={iconStyle}>
    <img
      src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
      alt="Chatbot"
      style={{ width: 60, height: 60 }}
    />
  </div>
);

const iconStyle = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  cursor: 'pointer'
};

export default ChatbotIcon;
