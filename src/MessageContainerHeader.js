import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useMessagingContext } from './MessagingContext';
import { hideBot } from './actions';

const MessageContainerHeader = ({ classes }) => {
  const { dispatch } = useMessagingContext();
  const onHideClick = () => {
    hideBot(dispatch);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={onHideClick} edge="start" color="inherit" aria-label="menu">
          <ArrowForwardIosIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MessageContainerHeader;

