import { makeStyles } from '@material-ui/core/styles';

const Styles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  rootPaper: {
    padding: theme.spacing(3, 2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default Styles;