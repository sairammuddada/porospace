"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const bannerImages = [
    "/assets/banners/banner1.jpg",
    "/assets/banners/banner2.jpg",
    "/assets/banners/banner3.jpg",
  ];

  return (
    <>
      <Navbar />

      <section id="banner-section" style={{ backgroundImage: `url(${bannerImages[currentIndex]})`, }} className="hero home-section">
        <div className="hero-content">
          <h1>Share Your Luggage Space</h1>
          <h2 style={{ color: '#ffd700' }} className="mb-1">Where Extra Space Pays</h2>
          <p>Travelers can post their luggage capacity and help others send items abroad.</p>

          <form className="search-box">
            <input type="text" placeholder="From City" required />
            <input type="text" placeholder="To City" required />
            <button
              type="submit"
              style={{ background: "var(--primary)" }}
            >
              Search
            </button>          </form>

          <p className="tagline">🌍 Safe • Fast • Affordable</p>
          <p className="extra-text">
            Save money, reduce waste, and connect with travelers going your way.
            Whether it’s gifts for family or urgent parcels, find reliable people to help.
          </p>

          <a href="#" className="btn btn-warning btn-lg fw-bold mt-4">Join Now</a>
        </div>
      </section>

      <section id="how" className="home-section dark-ui">
        <h2>How It Works</h2>
        <div className="how-it-works">
          <div className="step">
            <img src="https://img.icons8.com/ios-filled/100/004274/online-store.png" alt="Book" />
            <h3>Register/Login</h3>
            <p>Create an account and join our trusted traveler community.</p>
          </div>
          <div className="step">
            <img src="https://img.icons8.com/ios-filled/100/004274/packing.png" alt="Pack" />
            <h3>Post Luggage Space</h3>
            <p>List your available luggage space with destination and date.</p>
          </div>
          <div className="step">
            <img src="https://img.icons8.com/ios-filled/100/004274/shipped.png" alt="Ship" />
            <h3>Get Contacted</h3>
            <p>Other users will contact you to send items safely.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="home-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose <span className="text-warning">POROSPACE?</span></h2>
          <div className="row g-5 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="feature-step">
                <div className="feature-img">
                  <img src="/assets/features/save-costs.png" alt="Save Costs" />
                </div>
                <h5 className="fw-bold mt-3">Save Costs</h5>
                <p className="small">Avoid high courier fees by sharing traveler luggage space.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-step">
                <div className="feature-img">
                  <img src="/assets/features/safe-secure.png" alt="Safe & Secure" />
                </div>
                <h5 className="fw-bold mt-3">Safe & Secure</h5>
                <p className="small">Only verified users can connect and exchange luggage.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-step">
                <div className="feature-img">
                  <img src="/assets/features/global-reach.png" alt="Global Reach" />
                </div>
                <h5 className="fw-bold mt-3">Global Reach</h5>
                <p className="small">Connect with travelers flying worldwide instantly.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-step">
                <div className="feature-img">
                  <img src="/assets/features/easy-to-use.png" alt="Easy to Use" />
                </div>
                <h5 className="fw-bold mt-3">Easy to Use</h5>
                <p className="small">Simple 3-step process to post and contact travelers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="availability" className="home-section dark-ui">
        <div className="availability-header">
          <h2>Latest Space Availability</h2>
          <a href="availability.html" className="see-all">See All →</a>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body availability-card">
                <div className="d-flex align-items-center mb-3">
                  <img src="assets/temp/user.jpg" className="rounded-circle me-2" width="40" height="40" alt="User" />
                  <div>
                    <h6 className="mb-0 fw-bold">John Doe</h6>
                    <small className="text-muted">Traveler</small>
                  </div>
                </div>
                <h4>New York → London</h4>
                <h5 className="card-title fw-bold">3 kgs left for September 5th</h5>
                <p className="card-text text-muted">Spacious, lightweight, and perfect for travel.</p>
                <span className="badge bg-success">Available</span>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-primary w-100">Connect Now</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body availability-card">
                <div className="d-flex align-items-center mb-3">
                  <img src="assets/temp/user.jpg" className="rounded-circle me-2" width="40" height="40" alt="User" />
                  <div>
                    <h6 className="mb-0 fw-bold">John Doe</h6>
                    <small className="text-muted">Traveler</small>
                  </div>
                </div>
                <h4>Los Angeles → Tokyo</h4>
                <h5 className="card-title fw-bold">5 kgs left for September 10th</h5>
                <p className="card-text text-muted">Fits in cabin, stylish and durable.</p>
                <span className="badge bg-warning text-dark">Limited</span>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary w-100">Reserved</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body availability-card">
                <div className="d-flex align-items-center mb-3">
                  <img src="assets/temp/user.jpg" className="rounded-circle me-2" width="40" height="40" alt="User" />
                  <div>
                    <h6 className="mb-0 fw-bold">John Doe</h6>
                    <small className="text-muted">Traveler</small>
                  </div>
                </div>
                <h4>Paris → Dubai</h4>
                <h5 className="card-title fw-bold">2 kgs left for September 12th</h5>
                <p className="card-text text-muted">Comfortable, stylish, and multi-purpose.</p>
                <span className="badge bg-danger">Out of Stock</span>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-secondary w-100" disabled>Not Available</button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body availability-card">
                <div className="d-flex align-items-center mb-3">
                  <img src="assets/temp/user.jpg" className="rounded-circle me-2" width="40" height="40" alt="User" />
                  <div>
                    <h6 className="mb-0 fw-bold">John Doe</h6>
                    <small className="text-muted">Traveler</small>
                  </div>
                </div>
                <h4>Los Angeles → Tokyo</h4>
                <h5 className="card-title fw-bold">5 kgs left for September 10th</h5>
                <p className="card-text text-muted">Fits in cabin, stylish and durable.</p>
                <span className="badge bg-warning text-dark">Limited</span>
              </div>
              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary w-100">Reserved</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="items" className="home-section">
        <h2>Allowed Items & Terms</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              background: "#f0fff0",
              border: "1px solid #9c9",
              borderRadius: "12px",
              padding: "1.25rem",
            }}
          >
            <h3
              style={{
                color: "var(--secondary)",
                marginBottom: ".5rem",
              }}
            >
              ✅ Allowed (Examples)
            </h3>

            <ul
              style={{
                marginLeft: "1rem",
                lineHeight: "1.9",
              }}
            >
              <li>Clothing & apparel</li>
              <li>Books, documents (non-confidential)</li>
              <li>Small electronics & accessories (per airline rules)</li>
              <li>Cosmetics & toiletries ≤ 100ml (carry-on)</li>
              <li>Sealed/packaged snacks, dry foods, spices</li>
              <li>Gifts, souvenirs, handicrafts</li>
              <li>Baby items (clothes, toys, diapers)</li>
              <li>Stationery & small non-sharp tools</li>
            </ul>
          </div>

          <div
            style={{
              background: "#fff0f0",
              border: "1px solid #ffd6d6",
              borderRadius: "12px",
              padding: "1.25rem",
            }}
          >
            <h3
              style={{
                color: "#b00020",
                marginBottom: ".5rem",
              }}
            >
              🚫 Prohibited / Restricted
            </h3>

            <ul
              style={{
                marginLeft: "1rem",
                lineHeight: "1.9",
              }}
            >
              <li>Cash, gold, jewelry & high-value negotiables</li>
              <li>Alcohol, tobacco, vapes; illegal substances</li>
              <li>Prescription meds without valid documentation</li>
              <li>Liquids over airline limits; aerosols, pressurized cans</li>
              <li>Perishables (meat, fresh produce, dairy)</li>
              <li>Hazardous materials (chemicals, flammables, explosives)</li>
              <li>Weapons, ammo, sharp objects, self-defense items</li>
              <li>Counterfeit or customs-restricted goods</li>
            </ul>
            <p
              style={{
                fontSize: ".95rem",
                color: "#b00020",
                marginTop: ".5rem",
              }}
            >
              Always follow airline, airport, and destination country regulations.
            </p>
          </div>

          <div
            style={{
              background: "var(--light)",
              borderRadius: "12px",
              padding: "1.25rem",
            }}
          >
            <h3
              style={{
                color: "var(--secondary)",
                marginBottom: ".5rem",
              }}
            >
              ℹ️ Size & Weight
            </h3>

            <ul
              style={{
                marginLeft: "1rem",
                lineHeight: "1.9",
              }}
            >
              <li>Traveler declares available space (e.g., <strong>10kg</strong>).</li>
              <li>Sender must list item weight & dimensions honestly.</li>
              <li>Overweight items can be refused by the traveler.</li>
            </ul>
            <h3
              style={{
                color: "var(--secondary)",
                margin: ".75rem 0 .5rem",
              }}
            >
              🧾 Documentation
            </h3>

            <ul
              style={{
                marginLeft: "1rem",
                lineHeight: "1.9",
              }}
            >
              <li>Provide invoices/receipts if customs may apply.</li>
              <li>Include a simple contents list with contact details.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="terms" className="home-section dark-ui">
        <h2 className="text-center">User Terms (Summary)</h2>
        <div
          style={{
            width: "1200px",
            maxWidth: "98%",
            margin: "auto",
          }}>
          <div className="terms-grid">
            <div className="term">
              <div className="terms-title">
                <span className="icon">📦</span>
                <h3>Marketplace Only</h3>
              </div>
              <p>This platform connects travelers and senders; it does not transport items itself.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">✅</span>
                <h3>Compliance</h3>
              </div>
              <p>Users must follow airline rules and the laws of origin, transit, and destination countries.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">📝</span>
                <h3>Truthful Posts</h3>
              </div>
              <p>Travelers must post accurate route, date, and weight; senders must declare true contents and value.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">🚫</span>
                <h3>Right to Refuse</h3>
              </div>
              <p>Travelers may refuse items they deem unsafe, illegal, or misdeclared.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">🔒</span>
                <h3>Verification</h3>
              </div>
              <p>Platform may require ID/phone/email verification to enhance trust.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">💬</span>
                <h3>Messaging & Privacy</h3>
              </div>
              <p>Use in-app contact responsibly; no sharing of sensitive data in public posts.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">💲</span>
                <h3>Fees</h3>
              </div>
              <p>Any service/processing fee (if applicable) will be shown before confirmation.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">⚖️</span>
                <h3>Liability</h3>
              </div>
              <p>Users are responsible for their items and compliance. Platform not liable for loss, delay, or penalties.
              </p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">🤝</span>
                <h3>Disputes</h3>
              </div>
              <p>Parties should attempt resolution via chat; report issues with evidence.</p>
            </div>
            <div className="term">
              <div className="terms-title">
                <span className="icon">⛔</span>
                <h3>Prohibited Content</h3>
              </div>
              <p>No fraudulent, infringing, or harmful content in listings or messages.</p>
            </div>
          </div>
          <p className="note">This is a concise summary. By using the platform, you agree to the full Terms & Privacy Policy
            (link in footer).</p>

        </div>
      </section>

      <section id="testimonials" className="home-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>Luggage Service made my international travel stress-free. My bags arrived before I did!</p>
            <h4>– Sarah M.</h4>
          </div>
          <div className="testimonial">
            <p>No more waiting at baggage claim. Excellent service and timely delivery.</p>
            <h4>– James K.</h4>
          </div>
          <div className="testimonial">
            <p>No more waiting at baggage claim. Excellent service and timely delivery.</p>
            <h4>– James K.</h4>
          </div>
          <div className="testimonial">
            <p>Luggage Service made my international travel stress-free. My bags arrived before I did!</p>
            <h4>– Sarah M.</h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
