import React from 'react';
import { get } from './../services/product.service';


function Home() {
    const [products, setProducts] = useState([]);
    const getProducts = async()=>{
           const rs = await get();
           setProducts(rs);
    }

    useEffect(async()=>{
        getProducts();
    },[]);
    
    return (
        <sesion>
            <div className="container">
                <div className="row">
                    {
                        products.map((e, k) => {
                            return (
                                <div key={k} className="col-3">
                                    <div class="card">
                                        <img src={e.thumbnail} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{e.title}</h5>
                                            <p class="card-text">{e.description}</p>
                                            <span className="text-danger">{e.price}</span>
                                            <a href="#" class="btn btn-primary">Buy</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </sesion>
    );
    
}

export default Home;