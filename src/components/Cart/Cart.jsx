import React, {useState, useContext} from 'react'
import { Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete"
import cx from "classes";

// Assets.
import {tableStyles} from "./Cart.style"
import styles from "./Cart.module.scss"
// Context.
import {globalContext, GlobalProvider} from "./../context/GlobalContext"

const columns = [
    { id: 'image', label: '     ', minWidth: 60},
    { id: 'name', label: 'Name', minWidth: 30},
    {
      id: 'price',
      label: 'Price',
      minWidth: 30,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    }
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
// const rows = [
//     {
//         name: "RACER BLUE",
//         img:
//           "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//         price: 45  
//     },
//     {
//         name: "Native BLUE",
//         img:
//           "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//         price: 35
//     },
//     {
//         name: "Glide BLUE",
//         img:
//           "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
//         price: 30  
//     }
// ]

const Cart = () => {
    const classes = tableStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let {products, cart_products, checkout_cart, delete_cart_product} = useContext(globalContext)
    let [rows, setCartProducts] = useState(cart_products)
    //
    let items = cart_products.map(item => (item))
    let prices = cart_products.map(item => (item.price))
    let no_of_items = cart_products.length;
    let total_price = 0;
    // if (items.length) no_of_items = items.reduce((a, b) => a + b);
    if (prices.length) total_price = prices.reduce((a, b) => a + b);
    //
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    //
    const delete_product = (product_id) => {
        console.log("Product in Cart.")
        delete_cart_product(product_id)
    }
    //
    const checking_out = () => {
        setCartProducts([])
        checkout_cart()
    }
    //
    return (
        // <h1>Hello World</h1>
        <Grid container spacing={6}>
            <Grid item xs={7}>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell align="left"><img width={200} height={200} src={row.img} alt={row.name}/></TableCell>
                                    <TableCell component="th" scope="row" align="left">
                                        <span style={{fontWeight:"bold"}}>{row.name}</span>
                                    </TableCell>
                                    <TableCell align="left"><span style={{fontWeight:"bold"}}>${row.price}</span></TableCell>
                                </TableRow>
                            );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />

                </Paper>
            </Grid>
            <Grid item xs={4}>
            <Card className={classes.order_summary_root}>
                <CardHeader 
                    title="Order Summary" 
                    className={classes.order_summary_header} 
                    classes={{title:classes.order_summary_header_typography}}
                />
                <CardContent>
                    <div className={classes.order_info_container}>
                        <div className={classes.no_of_items_label_container}> 
                            <Typography variant="h6">Items</Typography>
                        </div>    
                        <div className={classes.no_of_items_value_container}> 
                        <Typography variant="h6">{no_of_items}</Typography>
                        </div>    
                    </div>
                    <div className={classes.total_container}>
                        <Typography display="inline" component="p" className={classes.order_summary_price}>
                            Total
                        </Typography>
                        <Typography variant="body2" display="inline" align="right" component="p" className={classes.order_summary_price}
                           style={{float:"right"}}>
                            ${total_price}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                <Button variant="contained" size="large" className={classes.checkout_btn} 
                        onClick={()=>{checking_out()}}>
                        CHECKOUT
                </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
    )
}

export default Cart