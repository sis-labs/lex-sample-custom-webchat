import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import AdbIcon from '@material-ui/icons/Adb';

import { toggleBot } from './actions';
import { useMessagingContext } from './MessagingContext';

const BotButton = ({classes}) => {
  const { dispatch } = useMessagingContext();
  
  const onIconClicked = async () => {
    toggleBot(dispatch);
  };
  
  return (<IconButton onClick={onIconClicked} color="primary" aria-label="upload picture" component="span" className={classes.botButton}>
      <AdbIcon />
    </IconButton>
  );
};

export default BotButton;

