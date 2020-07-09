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
import {Grid} from "@material-ui/core"
import cx from "classes";
// Components
import ProductList from "./../product-list/ProductList"
import Cart from "./../Cart/Cart"
import FavouriteComponent from "./../Favourite/Favourite"
import {Test} from "./../Test/Test"
// Assets.
import shoe_logo from "./../../images/shoe-logo-3.png"
import styles from "./Grid.module.scss"
import gridStyles from "./Grid.styles"


const GridComponent = () => {
    const classes = gridStyles()
    return (
        <div>
           <Router> 
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                            <span><Link to="/" className={classes.anchor_element}><strong>Shoe Store</strong></Link></span>
                        </Typography>
                        <IconButton aria-label="Favourite" className={classes.cartBtn}>
                            <Link className={classes.anchor_element} to="/favourites"><Favourite/></Link>
                        </IconButton>
                        <IconButton aria-label="Shopping Cart" className={classes.cartBtn}>
                            <Link className={classes.anchor_element} to="/cart"><ShoppingCart/></Link>
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
