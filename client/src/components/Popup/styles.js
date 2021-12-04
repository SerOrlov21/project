import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  popup: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '9',
    opacity: props.active ? '1' : '0',
    visibility: props.active ? 'visible' : 'hidden',
    transition: 'all 0.4s ease-in-out'
  }),
}));
