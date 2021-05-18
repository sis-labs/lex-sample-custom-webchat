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
  
  const onSendMessage = () => {
    sendMessage(dispatch, { content: message, ownerId: USER, ts: Date.now(), shown: false });
  };
  
  return (
    <footer className={classes.botFooter}>
      <FormControl className={classes.inputMessage}>
        <Input
          id="chat-message"
          value={message}
          onChange={onTextChanged}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </FormControl>
      <IconButton onClick={onSendMessage} color="primary" aria-label="upload picture" component="span">
        <SendIcon />
      </IconButton>
    </footer>
  );
};

export default MessageContainerFooter;

