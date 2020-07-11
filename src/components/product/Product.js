import React, {useState, useContext} from 'react'
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
import {globalContext, GlobalProvider} from "./../context/GlobalContext"

const Product = ({product}) => {
    const {add_to_cart} = useContext(globalContext)
    const classes = productStyles()
    //
    const AddToCart = ()=>{
        console.log("Product added in the cart")
        console.log(product)
        add_to_cart(product)
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title={product.name}
                />
                <CardMedia
                    className={classes.media}
                    image={product.img}
                    title={product.name}
                />
                <CardContent>
                    <Typography variant="body2" component="p" className={classes.price}>
                     ${product.price}.00
                    </Typography>
                </CardContent>
                <CardActions className={classes.action_container}>
                    {/* <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton> */}
                    <IconButton aria-label="Add to Cart" onClick={()=>{AddToCart()}}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
