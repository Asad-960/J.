import { useState } from "react";
import footerPayments from "../../../assets/footer-payments-grouped.svg";
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
          <div className="footer-col">
            <h4>CONTACT</h4>
            <p className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +92 2137 170 445
            </p>
            <p className="contact-item no-icon">(MON - SAT: 9:30AM - 10:00PM | SUN : 11AM - 8PM)</p>
            <p className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              eshop@junaidjamshed.com
            </p>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>COMPANY</h4>
            <p>ABOUT US</p>
            <p>CAREERS</p>
            <p>STORE LOCATOR</p>
            <p>CORPORATE</p>
          </div>

          {/* SUPPORT */}
          <div className="footer-col">
            <h4>CUSTOMER SUPPORT</h4>
            <p>CONTACT US</p>
            <p>DELIVERY & ORDERS</p>
            <p>RETURNS & EXCHANGES</p>
            <p>TRACK MY ORDER</p>
            <p>PAYMENT GUIDE</p>
            <p>FABRIC GLOSSARY</p>
          </div>

          {/* CONNECT */}
          <div className="footer-col">
            <h4>CONNECT</h4>
            <p>FACEBOOK</p>
            <p>X</p>
            <p>INSTAGRAM</p>
            <p>YOUTUBE</p>
            <p>PINTEREST</p>
            <p>LINKEDIN</p>
          </div>

          {/* NEWSLETTER */}
          <div className="newsletter footer-col">
            <h4>SIGN UP FOR OUR NEWSLETTER</h4>

            <div className="input-box">
              <input type="text" placeholder="EMAIL ADDRESS" />
              <button>→</button>
            </div>

            <p className="small">
              By providing your email, you agree to receive marketing email and accept our <a href="#">Privacy Policy</a> and <a href="#">Terms</a>
            </p>

            {/* PAYMENT ICONS */}
            <div className="payments">
              <img src={footerPayments} alt="Accepted payment methods" />
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
            By providing your email, you agree to receive marketing email and accept our <a href="#">Privacy Policy</a> and <a href="#">Terms</a>
          </p>
        </div>

        {/* ACCORDIONS */}
        {[
          { title: "CONTACT", items: ["+92 2137 170 445", "(MON - SAT: 9:30AM - 10:00PM | SUN : 11AM - 8PM)", "eshop@junaidjamshed.com"] },
          { title: "COMPANY", items: ["ABOUT US", "CAREERS", "STORE LOCATOR", "CORPORATE"] },
          { title: "CUSTOMER SUPPORT", items: ["CONTACT US", "DELIVERY & ORDERS", "RETURNS & EXCHANGES", "TRACK MY ORDER", "PAYMENT GUIDE", "FABRIC GLOSSARY"] },
          { title: "CONNECT", items: ["FACEBOOK", "X", "INSTAGRAM", "YOUTUBE", "PINTEREST", "LINKEDIN"] }
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
          <img src={footerPayments} alt="Accepted payment methods" />
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
