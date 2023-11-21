import React from "react";

function Shopcard({ details, onAddToCart }) {
  const handleAddToCart = () => {
   
    console.log(`Product ${details.products} added to the cart!`);
   
    onAddToCart(details.products); 
  };

  return (
    <div className="card text-center" style={{ height: "18rem", width: "15rem" }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-3">
          <img
            src={details.imageUrl}
            style={{ height: "150px", width: "150px", margin: "0 auto" }}
            className="card-img-top"
            alt="Product"
          />
          <h5 className="fw-bolder mt-3">{details.productDetails}</h5>
          <p>RS{details.price}</p>
        </div>
        <div className="text-center">
        <button onClick={() => handleAddToCart(details.id)} type="button" className="btn btn-primary">
  Add to Cart
</button>

      
        </div>
      </div>
    </div>
  );
}

export default Shopcard;
