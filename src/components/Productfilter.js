import React, { useState } from 'react';
import './productfilter.css'
import product from './product.json';



export default function Productfilter(){
    const [items,setItems]=useState(product)
    console.log(product)

    const filterItems = (catItem) => {
        const updateItems=product.filter((curItem)=>{
            return curItem.make === catItem
        });
        setItems(updateItems)
    }
    return (
        <div className="container mt-5">
            

            <button type="button" class="btn btn-dark me-3" onClick={()=>setItems(product)}>All Cars</button>
            <button type="button" class="btn btn-dark me-3" onClick={()=>filterItems("Cheverolet")}>Cheverolet</button>
            <button type="button" class="btn btn-dark me-3" onClick={()=>filterItems("Ford")}>Ford</button>
            <button type="button" class="btn btn-dark me-3" onClick={()=>filterItems("Dodge")}>Dodge</button>
            
            <div className="Row">
                <div>
                    {items.map((val)=> (
                        <div className='col-md-3'>
                            <div class="card" >
                                <img src={val.image} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body" >
                                    <h5>{val.make.substring(0, 15)} <span class="badge bg-dark">{val.model}</span></h5>
                                    
                                    <p>{val.description}<br></br>${val.price}</p>
                                        
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}