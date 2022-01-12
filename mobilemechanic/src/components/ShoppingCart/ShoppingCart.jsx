import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './ShoppingCart.css'


const ShoppingCart = (props) => {

    const [total, setCartTotal] = useState (0);

    useEffect(() => {
        props.getProductsInCart();
        getCartTotal(props.user.id);
    },    [props.productsInCart])

    async function getCartTotal (userId){
        try{
            const jwt = localStorage.getItem('token');
            let response = await axios.get('https://localhost:44394/api/authentication', {headers: {Authorization: 'Bearer ' + jwt}});
            setCartTotal(response.data)
        }
        catch{
            console.log('Error in getCartTotal');
        }

    }
    

    return(
        props.productsInCart.map(product => {
            return(
                <div>
                    <div>
                    {product.product.name}
                    </div>
                    <div>
                    {product.product.description}
                    </div>
                    <div>
                    Price: ${product.product.price}
                    </div>
                    <div>
                    Category: {product.product.category}
                    </div>
                    <div>
                    Quantity: {product.quantity}
                    </div>
                </div>
            
            
            )
        }

    )
    
    )
}

export default ShoppingCart