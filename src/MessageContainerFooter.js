import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const MessageContainerFooter = ({ classes }) => {
  const [message, setMessage] = useState('');
  
  const onTextChanged = (e) => {
    setMessage(e.target.value);
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
      <IconButton color="primary" aria-label="upload picture" component="span">
        <SendIcon />
      </IconButton>
    </footer>
  );
};

export default MessageContainerFooter;

