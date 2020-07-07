import React, {useContext} from 'react'
import Product from "./../product/Product"
import {Grid} from "@material-ui/core"
// Context.
import {GlobalProvider, globalContext} from "./../context/GlobalContext"

const ProductList = () => {
    const {products} = useContext(globalContext)
    return (
        <div>
                <Grid container spacing={1}>
                    {
                        Object.entries(products).map(([shoe_key, {name, img, price}]) => {
                            let product = {shoe_key, name, img, price}
                            console.log(product)
                            return (
                                <Grid item xs={4}>
                                    <Product product={product}/>
                                </Grid>
                            )
                        })
                    }
                </Grid> 
        </div>
    )
}

export default ProductList