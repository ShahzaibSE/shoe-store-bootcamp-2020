import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Favourite from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
// Components
import ProductList from "./../product-list/ProductList"
import Cart from "./../Cart/Cart"
import FavouriteComponent from "./../Favourite/Favourite"
import {Test} from "./../Test/Test"
// Assets.
import shoe_logo from "./../../images/shoe-logo-4.png"
import styles from "./Grid.module.scss"
import gridStyles from "./Grid.styles"
// context.
import {globalContext} from "./../context/GlobalContext"

const GridComponent = () => {
    const classes = gridStyles()
    const {cart_products} = useContext(globalContext)
    let number_of_cart_products = 0
    return (
        <div>
           <Router> 
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                            <span><Link to="/" className={classes.anchor_element}>
                                <strong>Cosmo Store</strong></Link></span>
                        </Typography>
                        {/* <IconButton aria-label="Favourite" className={classes.cartBtn}>
                            <Link className={classes.anchor_element} to="/favourites">
                                <Badge badgeContent={0} color="error">
                                    <Favourite/>
                                </Badge>    
                            </Link>
                        </IconButton> */}
                        <IconButton aria-label="Shopping Cart" className={classes.cartBtn}>
                            <Link className={classes.anchor_element} to="/cart">
                                 <Badge badgeContent={cart_products.length} color="error">
                                        <ShoppingCart/>
                                     </Badge> 
                            </Link>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div> 
            <div>  
                    <Routes> 
                            <Route path="/" element={<ProductList />}></Route>
                            <Route path="cart" element={<Cart />}></Route>  
                            <Route path="favourites" element={<FavouriteComponent />}></Route>   
                    </Routes>
            </div>
            </Router>  
        </div>
    )
}

export default GridComponent
