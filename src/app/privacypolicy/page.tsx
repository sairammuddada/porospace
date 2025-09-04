"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function PrivacyPolicy() {

    return (
        <>
            <Navbar />

            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Privacy Policy</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <h1 className="mb-4">Privacy Policy</h1>
                    <p>At <strong>Porospace</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>

                    <h3>1. Information We Collect</h3>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li>Personal details (name, email, phone number, etc.)</li>
                        <li>Account information (login details, preferences)</li>
                        <li>Usage data (pages visited, interactions, device details)</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use the collected data to:</p>
                    <ul>
                        <li>Provide and improve our services</li>
                        <li>Personalize user experience</li>
                        <li>Send important notifications and updates</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h3>3. Sharing of Information</h3>
                    <p>We do not sell or rent your personal information. However, we may share data with:</p>
                    <ul>
                        <li>Trusted third-party service providers</li>
                        <li>Legal authorities when required by law</li>
                    </ul>

                    <h3>4. Data Security</h3>
                    <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>

                    <h3>5. Cookies</h3>
                    <p>We use cookies to enhance user experience, analyze site traffic, and personalize content. You may disable cookies in your browser settings.</p>

                    <h3>6. Your Rights</h3>
                    <p>You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.</p>

                    <h3>7. Changes to This Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.</p>

                    <h3>8. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p><strong>Email:</strong> support@yourbrand.com</p>
                    <p><strong>Phone:</strong> +91-9876543210</p>
                </div>
            </section>

            <Footer />
        </>
    )
}