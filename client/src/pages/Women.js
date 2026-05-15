import React, { useState } from "react";

import { Link } from "react-router-dom";

function Women() {

  const [showSummer, setShowSummer] = useState(false);

  const products = [

    {
      id: 1,
      image: "/images/6.jpg",
      title: "MULTICOLOR LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.5,490",
    },

    {
      id: 2,
      image: "/images/7.jpg",
      title: "PURPLE LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.5,990",
    },

    {
      id: 3,
      image: "/images/8.jpg",
      title: "PINK LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.4,990",
    },

    {
      id: 4,
      image: "/images/3.jpg",
      title: "MULTICOLOR LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.5,490",
    },

    {
      id: 5,
      image: "/images/4.jpg",
      title: "MULTICOLOR LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.5,490",
    },

    {
      id: 6,
      image: "/images/9.jpg",
      title: "MULTICOLOR LAWN EMBROIDERED UNSTITCHED 3PC",
      price: "PKR.5,490",
    },

  ];

  /* PAGE 1 */

  if (!showSummer) {

    return (

      <div>

        <h2>SHOP BY CATEGORY</h2>

        <div className="Images">

          <div className="img1">

            <div className="img-wrapper">

              <img
                src="/images/1.jpg"
                alt=""
                onClick={() => setShowSummer(true)}
              />

            </div>

            <a href="/">
              SUMMER '26
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/images/2.jpg" alt="" />

            </div>

            <a href="/">
              KURTA
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/images/3.jpg" alt="" />

            </div>

            <a href="/">
              READY TO WEAR
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/images/4.jpg" alt="" />

            </div>

            <a href="/">
              UNSTITCHED
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/images/5.jpg" alt="" />

            </div>

            <a href="/">
              FORMALS
            </a>

          </div>

        </div>

      </div>

    );
  }

  /* PAGE 2 */

  return (

    <div>

      <div className="top">

        <p>HOME / EID COLLECTION</p>

        <h2>
          EID COLLECTION '26/
          <span>307 Products</span>
        </h2>

        <div className="menu">

          <a href="/">Unstitched</a>

          <a href="/">RTW</a>

          <a href="/">Kurta</a>

        </div>

      </div>

      <div className="products">

        {products.map((item) => (

          <div className="card" key={item.id}>

            <div className="new">
              NEW
            </div>

            <Link to="/product">

              <img src={item.image} alt="" />

            </Link>

            <p>{item.title}</p>

            <p>{item.price}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Women;