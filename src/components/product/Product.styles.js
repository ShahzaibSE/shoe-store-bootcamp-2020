import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const productStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 470,
      marginTop: 20,
      marginLeft: 20
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }
}));

export default productStyles