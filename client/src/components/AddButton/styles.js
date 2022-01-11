import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    background: 'transparent',
    border: 'none',
    padding: '0',
    width: '40px',
    height: '40px',
    position: 'fixed',
    bottom: '15px',
    left: '15px',
    cursor: 'pointer',
    '&:hover svg': {
      fill: 'rgba(149, 101, 65, 0.9)'
    }
  },

  svg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    fill: 'rgba(149, 101, 65, 1)',
    transition: 'all 0.3s ease-in-out'
  }
}));
