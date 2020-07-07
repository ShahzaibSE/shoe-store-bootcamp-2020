import { makeStyles } from '@material-ui/core/styles';

const gridStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color:"white"
    },
    anchor_element: {
      textDecoration: "none",
      color: "white"
    },
    cartBtn: {
        color: "white"
    }
}));

export default gridStyles