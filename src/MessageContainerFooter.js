import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { USER } from './message-model';
import { sendMessage } from './actions';
import { useMessagingContext } from './MessagingContext';

const MessageContainerFooter = ({ classes }) => {
  const { dispatch } = useMessagingContext();
  const [message, setMessage] = useState('');
  
  const onTextChanged = (e) => {
    setMessage(e.target.value);
  };
  
  const onKeyPressed = (e) => {
    if(e.key === 'Enter'){
      onSendMessage();
    }
  };
  
  const onSendMessage = () => {
    sendMessage(dispatch, { content: message, ownerId: USER, ts: Date.now(), shown: false });
    setMessage('');
  };
  
  return (
    <footer className={classes.botFooter}>
      <FormControl className={classes.inputMessage}>
        <Input
          id="chat-message"
          value={message}
          onChange={onTextChanged}
          onKeyPress={onKeyPressed}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
          autoFocus
        />
      </FormControl>
      <IconButton onClick={onSendMessage} color="primary" aria-label="upload picture" component="span">
        <SendIcon />
      </IconButton>
    </footer>
  );
};

export default MessageContainerFooter;

