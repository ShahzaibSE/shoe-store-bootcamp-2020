import { makeStyles } from '@material-ui/core/styles';

const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color:"white",
      textDecoration: null
    },
    cartBtn: {
        color: "white"
    }
}));

export default gridStyles