import { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom";

const product = (props)=>{
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const {count,setCount} = useContext(UserContext);
    const findProduct = async ()=>{
        const p = await find(id);
        setProduct(p);
    }

    useEffect(()=>{
        findProduct();
    },
    [])
    return(
        <section>
            <div className="Container">
                <div className="row">
                    <div className="col">
                        <img src={product.thumbnail}/>
                    </div>

                    <div className="col">
                        <h1>{product.titel}</h1>
                        <button type="button" className="btn btn-primay">Like</button>
                        <button type="button" className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
                </div>
        </section>
    )
}