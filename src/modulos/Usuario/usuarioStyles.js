import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  rootPapper: {
    padding: theme.spacing(3, 3),
    margin: theme.spacing(13, 7),
  },
}));

export default Styles;