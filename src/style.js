import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  botButton: {
    display: 'flex',
    position: 'fixed',
    right: '2pc',
    bottom: '1pc',
  },
  botDrawer: {
    width: '33pc',
  },
  botFooter: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  inputMessage: {
    width: '24pc',
  },
  messageItem: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      display: 'flex',
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(5),
    }
  },
  botMessage: {
    justifyContent: 'flex-start',
    backgroundColor: '#ccc'
  },
  userMessage: {
    justifyContent: 'flex-end',
    right: '1pc',
  },
}));

