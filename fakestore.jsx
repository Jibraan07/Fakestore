import { useEffect } from "react";
import { useState } from "react"

export function Fakestore(){
    const [products, setProducts] = useState([{id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}, category:''}]);
    
    function Loadproducts(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(products=>{
            setProducts(products);
        })
    }

    useEffect(()=>{
        Loadproducts();
    },[]);
    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between bg-warning p-2">
                <div>
                    <h2>Amazon<span className="bi bi-bag-check-fill ms-1"></span></h2>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electrinics</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>
                    <span className="me-3">Jewelery</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
            <section className="row mt-3">
                <nav className="col-3">

                </nav>
                <main className="col-9 d-flex flex-wrap">
                   {
                     products.map(items=>
                        <div key={items.id} className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={items.image} className="card-img-top" height="140" />
                            <div className="card-header overflow-auto" style={{height:"140px"}}>
                                <p>{items.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{items.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>{items.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                                </dl>
                            </div>
                        </div>
                        )
                   }
                </main>
            </section>
        </div>
    )
}