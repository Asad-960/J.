import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [open, setOpen] = useState("");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <footer className="footer">

      {/* ================= DESKTOP ================= */}
      <div className="footer-desktop container">

        <div className="footer-grid">

          {/* CONTACT */}
          <div>
            <h4>CONTACT</h4>
            <p>+92 2137 170 445</p>
            <p>(MON - SAT: 9:30AM - 10:00PM)</p>
            <p>eshop@junaidjamshed.com</p>
          </div>

          {/* COMPANY */}
          <div>
            <h4>COMPANY</h4>
            <p>ABOUT US</p>
            <p>CAREERS</p>
            <p>STORE LOCATOR</p>
            <p>CORPORATE</p>
          </div>

          {/* SUPPORT */}
          <div>
            <h4>CUSTOMER SUPPORT</h4>
            <p>CONTACT US</p>
            <p>DELIVERY & ORDERS</p>
            <p>RETURNS & EXCHANGES</p>
            <p>TRACK MY ORDER</p>
          </div>

          {/* CONNECT */}
          <div>
            <h4>CONNECT</h4>
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
            <p>YOUTUBE</p>
          </div>

          {/* NEWSLETTER */}
          <div className="newsletter">
            <h4>SIGN UP FOR OUR NEWSLETTER</h4>

            <div className="input-box">
              <input type="text" placeholder="EMAIL ADDRESS" />
              <button>→</button>
            </div>

            <p className="small">
              By providing your email, you agree to receive marketing emails.
            </p>

            {/* PAYMENT ICONS */}
            <div className="payments">
              <img src="/payments/visa.png" alt="visa" />
              <img src="/payments/mastercard.png" alt="mastercard" />
              <img src="/payments/paypak.png" alt="paypak" />
              <img src="/payments/amex.png" alt="amex" />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
        </div>

        <p className="copyright">
          © 2026 <span>J.</span> All Rights Reserved.
        </p>

      </div>

      {/* ================= MOBILE ================= */}
      <div className="footer-mobile">

        {/* NEWSLETTER */}
        <div className="newsletter-box">
          <h4>SIGN UP FOR OUR NEWSLETTER</h4>

          <div className="input-box">
            <input type="text" placeholder="EMAIL ADDRESS" />
            <button>→</button>
          </div>

          <p className="small">
            By providing your email, you agree to receive marketing emails.
          </p>
        </div>

        {/* ACCORDIONS */}
        {[
          { title: "CONTACT", items: ["+92 2137 170 445", "eshop@junaidjamshed.com"] },
          { title: "CUSTOMER SUPPORT", items: ["CONTACT US", "TRACK ORDER"] },
          { title: "COMPANY", items: ["ABOUT US", "CAREERS"] },
          { title: "CONNECT", items: ["FACEBOOK", "INSTAGRAM"] }
        ].map((section) => (
          <div key={section.title} className="accordion">

            <div
              className="accordion-header"
              onClick={() => toggle(section.title)}
            >
              <span>{section.title}</span>
              <span>{open === section.title ? "−" : "+"}</span>
            </div>

            {open === section.title && (
              <div className="accordion-content">
                {section.items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}

          </div>
        ))}

        {/* PAYMENT ICONS */}
        <div className="payments mobile">
          <img src="/payments/visa.png" alt="" />
          <img src="/payments/mastercard.png" alt="" />
          <img src="/payments/paypak.png" alt="" />
          <img src="/payments/amex.png" alt="" />
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom mobile">
          <p>TERMS & CONDITIONS</p>
          <p>PRIVACY POLICY</p>
          <p>© 2026 J. All Rights Reserved.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;