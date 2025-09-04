"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Faqs() {

    return (
        <>
            <Navbar />

            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">FAQs</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <div className="accordion" id="faqAccordion">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    What is PORO SPACE?
                                </button>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    PORO SPACE is a modern platform providing innovative workspace solutions, designed to meet the needs of businesses and professionals.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    How can I create an account?
                                </button>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    You can create an account by visiting our <a href="register.html">Signup Page</a> and filling out the required information.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                                    Can I contact support if I face issues?
                                </button>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, our support team is available to help you. You can reach us through the <a href="contact.html">Contact Page</a>.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                                    Is my data secure with PORO SPACE?
                                </button>
                            </h2>
                            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Absolutely. We use advanced security measures to ensure your data is always safe and protected.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faq5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                                    Can I cancel my subscription anytime?
                                </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, you can cancel your subscription anytime from your account settings without hidden charges.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}