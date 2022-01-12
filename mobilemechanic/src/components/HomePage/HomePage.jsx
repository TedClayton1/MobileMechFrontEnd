import React, { useState , useEffect} from 'react';
import axios from 'axios';
import './HomePage.css'







function HomePage(){
    const [products, setProducts] = useState([])


    //useEffect determines the first thing that will run when the page loads
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () =>{
        let response = await axios.get('https://localhost:44394/api/products')
        //setProduct is talking to products(variable on like 43) and tells it what its value should be
        setProducts(response.data)
    }

    const addToCart = (product) =>{
        console.log(product)
        //post to shopping cart request will go here
    }

    return (
        <div>
            
                
            
                <table>
                    
                    <tr className='trow'>
                    <th className='tname'>Name</th>
                    <th className='tname'>Description</th>
                    <th className='tname'>$ Price $</th>
                    </tr>
                    
                        {products.map((element)=>
                        
                            <tr className='trow2'>
                            <td className='tname'> {element.name} </td>
                            <td className='tname'> {element.description}</td>
                            <td className='tname'> {element.price}</td>
                            <button className='addbutton' onClick={()=>addToCart(element.productId)}>Add to cart</button>
                            </tr>
                     
                    )}
                    </table>
                    
                    
                    
                </div>
               
            
            )
            
        }
                 
             
                
                
                
                
            

export default HomePage;

// import React, {useContext, useState, useReducer, useEffect} from 'react'


// const Wishlist=()=>{

// const product=[
//     {Name: "Men's Mountain Bike", price: 350, unit:1},
//     {Name: "Men's Road Bike", price: 300, unit:1},
//     {Name: "Woman's Mountain Bike", price: 150, unit:1},
//     {Name: "Woman's Road Bike", price: 1250, unit:1},
//     {Name: "Boys's Mountain Bike", price: 100, unit:1},
//     {Name: "Girls's Mountain Bike", price: 100, unit:1},
// ]

// const [total, setTotal]=useState(0)
// const [qty, setQty]=useState(1) 

// const handleClick=e=>{
//     setTotal(prevState=>prevState.price),
//     setQty(e.unit+1)
//     console.log(e)
// };

//     return(
//         <div>
//             {product.map((p))=>
//             <li key={p.name}{p.price}
//         <button onClick={()=>handleClick(p)}>Add to cart</button>
//         &nbsp;{qty}
//         </li>)
//             }
//             Price: {total}
//         </div>
//     )

// }