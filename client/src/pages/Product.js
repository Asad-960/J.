import React, { useState } from "react";

function Product() {

  const [open, setOpen] = useState(false);

  return (

    <div>

      <div className="container">

        <div className="left">

          <div className="img-box">

            <div className="new">
              NEW
            </div>

            <img src="/images/6.jpg" alt="" />

          </div>

          <div className="img-box">

            <img src="/images/7.jpg" alt="" />

          </div>

        </div>

        <div className="right">

          <p className="path">

            HOME / EID COLLECTION 26 /

            MULTICOLOR LAWN DIGITAL PRINTED

          </p>

          <h1>

            Multicolor Lawn Digital Printed

            Unstitched 2pc

          </h1>

          <p className="id">

            Product ID: JDS261310U

          </p>

          <h2>PKR.2,990</h2>

          <p className="sku">

            SKU: JDS261310U-MULTI-2PS-REG

          </p>

          <p className="review">

            ☆ ☆ ☆ ☆ ☆ WRITE A REVIEW

          </p>

          <div className="tags">

            <span>● Lawn</span>

            <span>● Digital Printed</span>

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

      {/* SIDEBAR */}

      <div className={`cart-sidebar ${open ? "active" : ""}`}>

        <div className="cart-top">

          <p>Your cart</p>

          <span onClick={() => setOpen(false)}>
            ✕
          </span>

        </div>

        <div className="cart-item">

          <img src="/images/6.jpg" alt="" />

          <div className="cart-info">

            <h3>
              MULTICOLOR LAWN EMBROIDERED
            </h3>

            <p>Size: 3 Piece</p>

            <h4>PKR.5,490</h4>

            <p>Product ID: JLU263956U</p>

            <div className="qty-box">

              <button>-</button>

              <span>1</span>

              <button>+</button>

            </div>

          </div>

        </div>

        <div className="subtotal">

          <h2>Subtotal</h2>

          <h2>PKR.5,490</h2>

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

export default Product;