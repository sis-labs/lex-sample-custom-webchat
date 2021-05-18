import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { BOT } from './message-model';

const MessageItem = ({classes, message}) => (
  <Paper elevation={2} className={message.ownerId === BOT ? classes.botMessage : classes.userMessage}>
    <Typography variant="body1" gutterBottom>{message.content}</Typography>
  </Paper>
);

export default MessageItem;

