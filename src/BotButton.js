import React from 'react';

import Fab from '@material-ui/core/Fab';
import AdbIcon from '@material-ui/icons/Adb';

import { toggleBot } from './actions';
import { useMessagingContext } from './MessagingContext';

const BotButton = ({classes}) => {
  const { dispatch } = useMessagingContext();
  
  const onIconClicked = async () => {
    toggleBot(dispatch);
  };
  
  return (
    <Fab color="primary" aria-label="add" onClick={onIconClicked} className={classes.botButton}>
      <AdbIcon />
    </Fab>
  );
};

export default BotButton;

