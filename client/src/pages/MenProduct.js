import React, { useState } from "react";

function MenProduct() {

  const [open, setOpen] = useState(false);

  return (

    <div>

      <div className="container">

        <div className="left">

          <div className="img-box">

            <div className="new">
              NEW
            </div>

            <img src="/menimages/9.jpg" alt="" />

          </div>

          <div className="img-box">

            <img src="/menimages/5.jpg" alt="" />

          </div>

        </div>

        <div className="right">

          <p className="path">

            HOME / MEN COLLECTION /

            MEN KURTA

          </p>

          <h1>

            Premium Men Kurta

          </h1>

          <p className="id">

            Product ID: MEN12345

          </p>

          <h2>PKR.4,990</h2>

          <p className="sku">

            SKU: MEN-KURTA-001

          </p>

          <p className="review">

            ☆ ☆ ☆ ☆ ☆ WRITE A REVIEW

          </p>

          <div className="tags">

            <span>● Cotton</span>

            <span>● Premium</span>

          </div>

          <p className="stock">

            Limited Stock Alert:
            Get Yours Before They're Gone

          </p>

          <h3>QTY</h3>

          <div className="qty">

            <button>-</button>

            <span>1</span>

            <button>+</button>

          </div>

          <button
            className="bag"
            onClick={() => setOpen(true)}
          >
            ADD TO BAG
          </button>

        </div>

      </div>

      <div className={`cart-sidebar ${open ? "active" : ""}`}>

        <div className="cart-top">

          <p>Your cart</p>

          <span onClick={() => setOpen(false)}>
            ✕
          </span>

        </div>

        <div className="cart-item">

          <img src="/menimages/3.jpg" alt="" />

          <div className="cart-info">

            <h3>
              MEN KURTA
            </h3>

            <p>Size: Large</p>

            <h4>PKR.4,990</h4>

            <p>Product ID: MEN12345</p>

            <div className="qty-box">

              <button>-</button>

              <span>1</span>

              <button>+</button>

            </div>

          </div>

        </div>

        <div className="subtotal">

          <h2>Subtotal</h2>

          <h2>PKR.4,990</h2>

        </div>

        <p className="tax">

          Taxes included and shipping
          calculated at checkout

        </p>

        <button className="view-cart">
          VIEW CART
        </button>

        <button className="checkout">
          CHECKOUT
        </button>

      </div>

    </div>

  );
}

export default MenProduct;