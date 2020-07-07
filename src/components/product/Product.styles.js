import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const productStyles = makeStyles((theme) => ({
    root: {
      minWidth: 300,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      flexGrow: 1
    },
    media: {
      minHeight: 70,
      paddingTop: '56.25%', // 16:9
    },
    favouriteBtn: {
    },
    price: {
      fontSize:30,
      fontWeight: "bold",
      color: "black",
      textAlign: "center"
    },
    action_container: {
      justifyContent: "center"
    }
}));

export default productStyles