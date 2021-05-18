import React from 'react';

import Grid from '@material-ui/core/Grid';

import MessageItem from './MessageItem';

import { useMessagingContext } from './MessagingContext';

const MessageContainer = ({ classes }) => {
  const { context: { messages } } = useMessagingContext();
  const msgs = messages.map((m, i) => (
    <Grid key={i} className={classes.messageItem} item xs={12}>
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

