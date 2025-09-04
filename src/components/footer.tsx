import Link from "next/link";

export default function Footer() {
    return (
        <><section
            className="py-5 text-center text-white"
            style={{ background: "var(--primary)" }}
        >
            <div className="container">
                <h2 className="mb-3" style={{ color: '#ffffff' }}>Ready to Share Your Luggage Space?</h2>
                <p className="mb-4">Join thousands of travelers helping others send luggage abroad.</p>
                <Link href="/register" className="btn btn-light btn-lg">Register Now</Link>
            </div>
        </section><footer className="text-light pt-5 pb-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mb-4 text-center">
                            <img
                                src="assets/porospace-white.png"
                                alt="Porospace"
                                style={{ height: "70px", width: "auto" }}
                                className="d-block mx-auto mb-3" />
                            <p>
                                Helping travelers share luggage space worldwide.
                                Save costs, ensure safe delivery, and connect globally.
                            </p>
                        </div>

                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
                                <li><Link href="/availability" className="text-light text-decoration-none">Space Availability</Link></li>
                                <li><Link href="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
                                <li><Link href="/faqs" className="text-light text-decoration-none">FAQs</Link></li>
                                <li><Link href="/blogs" className="text-light text-decoration-none">Blogs</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Contact</h6>
                            <p className="mb-1"><i className="bi bi-envelope"></i> support@porospace.com</p>
                            <p className="mb-1"><i className="bi bi-phone"></i> +1 234 567 890</p>
                            <p><i className="bi bi-geo-alt"></i> New York, USA</p>
                        </div>

                        <div className="col-md-3 mb-4">
                            <h6 className="fw-bold">Follow Us</h6>
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-twitter-x fs-4"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-instagram fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
                        </div>
                    </div>

                    <div className="text-center mt-4 border-top pt-3">
                        <p className="mb-0">&copy; 2025 Porospace.com. All rights reserved.</p>
                        <Link href="/termsandconditions" className="text-decoration-none text-light me-2">Terms & Conditions</Link> |
                        <Link href="/privacypolicy" className="text-decoration-none text-light ms-2">Privacy Policy</Link>
                    </div>
                </div>
            </footer></>
    )
}