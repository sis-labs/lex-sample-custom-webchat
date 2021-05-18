import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CameraIcon from '@material-ui/icons/PhotoCamera';

const BlogAppBar = ({classes, title}) => (
  <AppBar position="relative">
    <Toolbar>
      <CameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default BlogAppBar;

