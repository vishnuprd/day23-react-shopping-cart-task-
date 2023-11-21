import React from "react";

function Cart() {
    const cartproducts = [
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
            imageUrl: "https://example.com/onehttps://oasis.opstatics.com/content/dam/oasis/default/product-specs/8t-green.pngplus.jpg",
        },
        {
            id: "product4",
            productDetails: 'Xiaomi',
            price: 30000,
            imageUrl: "https://example.chttps://cdn1.smartprix.com/rx-ijqsTjZRe-w420-h420/xiaomi-mi-12-5g.webpom/xiaomi.jpg",
        },
        {
            id: "product5",
            productDetails: 'Oppo',
            price: 25000,
            imageUrl: "https://example.com/ophttps://www.notebookcheck.net/uploads/tx_nbc2/OppoA3s__1_.jpgpo.jpg",
        },
        {
            id: "product6",
            productDetails: 'Huawei',
            price: 15000,
            imageUrl: "https://example.com/huawehttps://cdn1.smartprix.com/rx-itHNXm97K-w420-h420/huawei-p60.webpi.jpg",
        },
        {
            id: "product7",
            productDetails: 'Nokia',
            price: 15000,
            imageUrl: "https://example.chttps://images.hindustantimes.com/tech/htmobile4/P35062/heroimage/139754-v4-nokia-3.4-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=263&height=263om/nokia.jpg",
        },
        {
            id: "product8",
            productDetails: 'Ipad',
            price: 100000,
            imageUrl: "https://example.chttps://images.hinduhttps://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-unselect-gallery-1-202207?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1654902977555stantimes.com/tech/htmobile4/P35062/heroimage/139754-v4-nokia-3.4-mobile-phone-large-1.jpg?impolicy=new-ht-20210112&width=263&height=263om/nokia.jpg",
        },
    ]

    return (
        <div className="container px-3 my-5 clearfix">
            {/* Shopping cart table */}
            <div className="card">
                <div className="card-header">
                    <h2>Shopping Cart</h2>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered m-0">
                            <thead>
                                <tr>
                                    {/* Set columns width */}
                                    <th className="text-center py-3 px-4" style={{ minWidth: "400px" }}>Product Name &amp; Details</th>
                                    <th className="text-right py-3 px-4" style={{ width: "100px" }}>Price</th>
                                    <th className="text-center py-3 px-4" style={{ width: "120px" }}>Quantity</th>
                                    <th className="text-right py-3 px-4" style={{ width: "100px" }}>Total</th>
                                    <th className="text-center align-middle py-3 px-0" style={{ width: "40px" }}>
                                        <a href="#" className="shop-tooltip float-none text-light" title="" data-original-title="Clear cart">
                                            <i className="ion-md-trash"></i>
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Repeat the following block for each product */}
                                {cartproducts.map((product) => (
                                    <tr key={product.id}>
                                        <td className="p-4">
                                            <div className="media align-items-center">
                                                <img
                                                    src={product.imageUrl}
                                                    style={{ height: '100px', width: '100px' }}
                                                    className="d-block ui-w-40 ui-bordered mr-4"
                                                    alt=""
                                                />

                                                <div className="media-body">
                                                    <a href="#" className="d-block text-dark">{product.productDetails}</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right font-weight-semibold align-middle p-4">RS{product.price}</td>
                                        <td className="align-middle p-4"><input type="text" className="form-control text-center" value="1" /></td>
                                        <td className="text-right font-weight-semibold align-middle p-4">RS{(product.price * 1).toFixed(1)}</td>
                                        <td className="text-center align-middle px-0">
                                        <button type="button" class="btn btn-primary">x</button>
                                        </td>

                                    </tr>
                                ))}
                                {/* End of product block */}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-right mt-4">
                        <label className="text-muted font-weight-normal m-0">Total price</label>
                        <div className="text-large"><strong>RS</strong></div>
                    </div>
                </div>
                <div className="float-right">
                    <button type="button" className="btn btn-lg btn-default md-btn-flat mt-2 mr-3">Back to shopping</button>
                    <button type="button" className="btn btn-lg btn-primary mt-2">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
