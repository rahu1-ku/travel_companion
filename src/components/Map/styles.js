import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mapContainer: {
    height: '85vh', width: '100%', margin: '10px', zIndex: 1,
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  leafletContainer: {
    height: '85vh', zIndex: 1, 
  }
}));