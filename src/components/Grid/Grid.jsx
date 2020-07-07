import React from 'react'
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
import Cart from "./../Cart/Cart"
import {Test} from "./../Test/Test"
import Product from "./../product/Product"
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
                            <span><strong>Shoe Store</strong></span>
                        </Typography>
                        <IconButton aria-label="Favourite" className={classes.cartBtn}>
                            <Favourite><Link to="/"/></Favourite>
                        </IconButton>
                        <IconButton aria-label="Shopping Cart" className={classes.cartBtn}>
                            <ShoppingCart><Link to="/cart" /></ShoppingCart>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={4}> 
                        <Product/>
                    </Grid>
                    <Grid item xs={4}> 
                        <Product/>
                    </Grid>
                </Grid>    
            </div>  
            </Router>  
        </div>
    )
}

export default GridComponent
