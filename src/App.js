import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProjectNav from './Shopnav';
import Content from './Maincontent';
import Shopcard from './Productcard';
import Foot from './Footer';
import Cart from './Cart';

function App() {
  const handleAddToCart = (id) => {
    alert (`Thank you for adding to the cart ${id}`);
  }
  const products = [
    {
      id: "product1",
      productDetails: 'Iphone',
      price: 150000,
      imageUrl: "https://i0.wp.com/beritajatim.com/wp-content/uploads/2022/11/iPhone-15.jpeg?w=1600&ssl=1",
    },
    {
      id: "product2",
      productDetails: 'Samsung',
      price: 100000,
      imageUrl: "https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-online-exclusive-colors.jpg",
    },
    {
      id: "product3",
      productDetails: 'OnePlus',
      price: 50000,
      imageUrl: "https://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.png",
    },
    {
      id: "product4",
      productDetails: 'Xiaomi',
      price: 30000,
      imageUrl: "https://cdn1.smartprix.com/rx-ijqsTjZRe-w420-h420/xiaomi-mi-12-5g.webp",
    },
    {
      id: "product5",
      productDetails: 'Oppo',
      price: 25000,
      imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/OppoA3s__1_.jpg",
    },
    {
      id: "product6",
      productDetails: 'Huawei',
      price: 15000,
      imageUrl: "https://cdn1.smartprix.com/rx-itHNXm97K-w420-h420/huawei-p60.webp",
    },
    {
      id: "product7",
      productDetails: 'Nokia',
      price: 15000,
      imageUrl: "https://images.hindustantimes.com/tech/htmobile4/P35062/heroimage/139754-v4-nokia-3.4-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=263&height=263",
    },
    {
      id: "product8",
      productDetails: 'Ipad',
      price: 100000,
      imageUrl: "https://images.hindustantimes.com/https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1654902977555tech/htmobile4/P35062/heroimage/139754-v4-nokia-3.4-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=263&height=263",
    },
  ];

  return (
    <div>
      <section className="py-5">
        <div className="container"> 
          <div className="row">
            <CartProjectNav />
            <Cart />
            <Content />
            {products.map((product, index) => (
              <Shopcard
                key={index}
                details={product}
                onAddToCart={handleAddToCart}
              />
            ))}
            <Foot />
          </div>
        </div>
      </section>
    </div>
  );
}


export default App;
