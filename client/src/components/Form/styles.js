
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: '100%',
    maxWidth: '500px',
    padding: theme.spacing(2),
    position: 'relative'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '10px 8px',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  close: {
    width: '30px',
    height: '30px',
    background: 'transparent',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px'
  },
  closeAlt: {
    width: '30px',
    height: '30px',
    background: 'transparent',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    position: 'absolute',
    top: '-30px',
    right: '-30px'
  },
  svg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}));
