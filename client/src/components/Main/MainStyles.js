import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles({
  root: {},
  input: {
    display: 'none',
  },
  button: {
    color: blue[900],
  },
  label: {
    marginTop: '20px',
  },
  createbutton: {
    marginTop: '20px !important',
  },
});

export default useStyles;
