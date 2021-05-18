import React from 'react';

import Drawer from '@material-ui/core/Drawer';

import { hideBot } from './actions';
import { useMessagingContext } from './MessagingContext';

const BotDrawer = ({classes}) => {
  const { dispatch, context: { botVisible } } = useMessagingContext();
  
  const onDrawerClose = () => {
    hideBot(dispatch);
  };
  
  return (
    <Drawer anchor='right' open={botVisible} onClose={onDrawerClose} classes={{
        paper: classes.botDrawer,
    }}>
      <div>A content</div>
    </Drawer>
  );
};

export default BotDrawer;

