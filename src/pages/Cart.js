import React, { useEffect, useState } from 'react';
import UserContext from '../store/context';

function Cart() {
    const [products, setProducts] = useState([]);
    const {cart, setCart} = userContext(UserContext);
    const getProducts = ()=>{
           setProducts(cart);
    }
    useEffect(()=>
        {

        }
    );// component did update

    useEffect(async()=>{
        getProducts();
    },[]);//component did mount

    useEffect(()=>{

    },[products]);//run when product updated

    return (
        <section>
            <div className="Container">
                <h1>Cart</h1>
                <table className='table'>
                    <thead>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </thead>
                    <tbody>
                        {
                            products.map((e,k)=>{
                                return(
                                    <tr key={k}>
                                        <td><img src={e.thumbnail} width={120} className='img-thumbnail'/></td>
                                        <td>{e.title}</td>
                                        <td>{e.price}</td>
                                        <td>{1}</td>
                                        <td>{e.price*1}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Cart;