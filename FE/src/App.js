import React, { useState } from 'react';
import { Container, IconButton, Box } from '@mui/material';
import Chat from './components/Chat';
import backgroundImage from './bg.jpg'; // Ensure the path is correct
import ChatIcon from '@mui/icons-material/Chat';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <IconButton
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#3f51b5', // primary.main
          color: 'white',
          zIndex: 11, // Ensure button is above other elements
        }}
        onClick={toggleChat}
      >
        <ChatIcon />
      </IconButton>

      {isChatOpen && (
        // <Container
        //   style={{
        //     backgroundImage: `url(${backgroundImage})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     height: '100vh', // Full viewport height
        //     width: '100vw', // Full viewport width
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     position: 'fixed',
        //     top: 0,
        //     left: 0,
        //     zIndex: 10, // Ensure it appears above other elements
        //   }}
        // >
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
              borderRadius: '10px',
              width: '100%',
              maxWidth: '600px', // Set max width for the chat container
              height: '100%',
              maxHeight: '90vh', // Set max height for the chat container
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              boxSizing: 'border-box',
              overflowY: 'auto', // Allow scrolling for the chat content
              position: 'relative', // Ensure it doesn't interfere with fixed position elements
            }}
          >
            <Chat />
          </Box>
        // </Container>
      )}
    </div>
  );
};

export default App;
