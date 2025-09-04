"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contactus() {

    return (
        <>
            <Navbar />
            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Contact Us</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="contact-card info-box shadow-sm">
                                <i className="bi bi-geo-alt-fill"></i>
                                <h5>Our Location</h5>
                                <p>123 Business Street, Hyderabad, India</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-card info-box shadow-sm">
                                <i className="bi bi-telephone-fill"></i>
                                <h5>Call Us</h5>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-card info-box shadow-sm">
                                <i className="bi bi-envelope-fill"></i>
                                <h5>Email</h5>
                                <p>info@porospace.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-container container mt-5 mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.21951705647!2d78.48667151532212!3d17.385044488070756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99a9b0f8e7c5%3A0xa1a123b5b6c07c9a!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1695031800000!5m2!1sen!2sin"
                    width="100%" height="400" style={{ border: 0 }} loading="lazy"></iframe>
            </section>

            <Footer />
        </>
    )
}