import React, { useState } from "react";

import { Link } from "react-router-dom";

function Men() {

  const [showSummer, setShowSummer] = useState(false);

  const products = [

    {
      id: 1,
      image: "/menimages/2.jpg",
      title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
    },

    {
      id: 2,
      image: "/menimages/9.jpg",
      title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
    },

    {
      id: 3,
      image: "/menimages/8.jpg",
      title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
    },

    {
      id: 4,
      image: "/menimages/3.jpg",
    title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
    },

    {
      id: 5,
      image: "/menimages/4.jpg",
     title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
    },

    {
      id: 6,
      image: "/menimages/9.jpg",
    title: "CREAM BOSKI UNSTITCHED FABRICSale ",
      price: "PKR.3,990",
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
                src="/menimages/1.jpg"
                alt=""
                onClick={() => setShowSummer(true)}
              />

            </div>

            <a href="/">
              MEN COLLECTION
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/menimages/2.jpg" alt="" />

            </div>

            <a href="/">
              KURTA
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/menimages/3.jpg" alt="" />

            </div>

            <a href="/">
              WAISTCOAT
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/menimages/4.jpg" alt="" />

            </div>

            <a href="/">
              FOOT WEARE
            </a>

          </div>

          <div className="img1">

            <div className="img-wrapper">

              <img src="/menimages/5.jpg" alt="" />

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

        <p>HOME / MEN COLLECTION</p>

        <h2>
          MEN COLLECTION '26/
          <span>250 Products</span>
        </h2>

        <div className="menu">

          <a href="/">Kurta</a>

          <a href="/">Waistcoat</a>

          <a href="/">Formals</a>

        </div>

      </div>

      <div className="products">

        {products.map((item) => (

          <div className="card" key={item.id}>

            <div className="new">
              NEW
            </div>

            <Link to="/menproduct">

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

export default Men;