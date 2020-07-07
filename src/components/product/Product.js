import React, {useContext} from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// Assets.
import productStyles from "./Product.styles"
// Context.
import {globalContext} from "./../context/GlobalContext"

const Product = ({product : {shoe_key, name, img, price}}) => {
    const classes = productStyles()
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title={name}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography variant="body2" component="p" className={classes.price}>
                     ${price}.00
                    </Typography>
                </CardContent>
                <CardActions className={classes.action_container}>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
