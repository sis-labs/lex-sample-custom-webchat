import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import BlogAppBar from './BlogAppBar';
import Banner from './Banner';
import CardList from './CardList';
import BlogFooter from './BlogFooter';
import BotButton from './BotButton';
import BotDrawer from './BotDrawer';

import { useStyles } from './style';

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <BlogAppBar classes={classes} title={"Album Sample"} />
      <main>
        <Banner classes={classes} />
        <CardList classes={classes} />
      </main>
      {/* Footer */}
      <BlogFooter classes={classes} />
      <BotButton classes={classes} />
      <BotDrawer classes={classes} />
    </React.Fragment>
  );
}

export default App;
