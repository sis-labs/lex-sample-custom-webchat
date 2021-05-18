import React from 'react';

import Grid from '@material-ui/core/Grid';

import MessageItem from './MessageItem';

import { BOT, USER } from './message-model';

const messages = [
  {
    key: 1,
    ts: Date.now(),
    content: 'This is the first message',
    ownerId: BOT,
    shown: true,
  },
  {
    key: 2,
    ts: Date.now(),
    content: 'This is the response for the first message',
    ownerId: USER,
    shown: true,
  },
  {
    key: 3,
    ts: Date.now(),
    content: 'This is the response for the second message',
    ownerId: BOT,
    shown: true,
  },
];

const MessageContainer = ({ classes }) => {
  const msgs = messages.map(m => (
    <Grid className={classes.messageItem} item xs={12}>
      <MessageItem classes={classes} message={m} />
    </Grid>
  ));
  return (
    <Grid container className={classes.root}>
      {msgs}
    </Grid>
  );
};

export default MessageContainer;

