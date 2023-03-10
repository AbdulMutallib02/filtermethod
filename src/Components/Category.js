import React, { useState } from "react";
import Categories from "./Categories";

const Category = () => {
    const [data, setData] = useState(Categories);

    const filterResult = (cartItems) =>{
        const result = Categories.filter((currData)=>{
          return  currData.category === cartItems
        })
        setData(result)
    }
  return (
    <>
      <h1 className="text-center text-info mt-3">Let's Shop</h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("men")}>Men</button>
            <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("women")}>Women</button>
            <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("children")}>Children</button>
            <button className="btn btn-warning w-100 mb-4"onClick={()=>filterResult("shoes")}>Shoes</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)} >All</button>
          </div>

          <div className="col-md-9">
            <div className="row">
                {data.map((val)=>{
                    const {id, title, price, image} = val
                    return (
                        <>
                        <div className="col-md-4 mb-4" key={id}>
                <div className="card">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>Price: {price}/-</p>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn btn-dark">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
                        </>
                    )
                })}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
