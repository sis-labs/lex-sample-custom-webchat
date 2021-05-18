import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import BlogAppBar from './BlogAppBar';
import Copyright from './Copyright';
import Banner from './Banner';
import CardList from './CardList';

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
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;
