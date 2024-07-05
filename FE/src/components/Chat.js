import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await axios.post('http://localhost:5000/api/chat', { prompt: input });
        const botMessage = { sender: 'bot', text: response.data.response };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Error fetching response:', error);
      }

      setInput('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Chat with Telco Bot
      </Typography>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} style={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            {message.sender === 'bot' && (
              <ListItemAvatar>
                <Avatar>
                  <AndroidIcon />
                </Avatar>
              </ListItemAvatar>
            )}
            <Box
              sx={{
                backgroundColor: message.sender === 'user' ? '#dcf8c6' : '#f1f0f0',
                borderRadius: '20px',
                padding: '10px',
                maxWidth: '60%',
              }}
            >
              <ListItemText primary={message.text} />
            </Box>
            {message.sender === 'user' && (
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
            )}
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon />}
        onClick={handleSend}
        sx={{ marginTop: 2 }}
      >
        Send
      </Button>
    </Container>
  );
};

export default Chat;
