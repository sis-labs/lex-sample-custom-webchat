import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AndroidIcon from '@material-ui/icons/Android';

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
        <AndroidIcon />
        <Typography variant="h6" className={classes.title}>
          Cassidy
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MessageContainerHeader;

