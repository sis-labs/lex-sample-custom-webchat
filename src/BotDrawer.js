import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import { hideBot } from './actions';
import { useMessagingContext } from './MessagingContext';

import MessageContainer from './MessageContainer';
import MessageContainerHeader from './MessageContainerHeader';
import MessageContainerFooter from './MessageContainerFooter';

const BotDrawer = ({classes}) => {
  const { dispatch, context: { botVisible } } = useMessagingContext();
  
  const onDrawerClose = () => {
    hideBot(dispatch);
  };
  
  return (
    <Drawer anchor='right' open={botVisible} onClose={onDrawerClose} classes={{
        paper: classes.botDrawer,
    }}>
      <MessageContainerHeader classes={classes}/>
      <MessageContainer classes={classes}/>
      <MessageContainerFooter classes={classes}/>
    </Drawer>
  );
};

export default BotDrawer;

