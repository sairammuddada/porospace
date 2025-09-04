"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Termsandconditions() {

    return (
        <>
            <Navbar />

            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Terms & Conditions</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <section className="container mt-5 pt-5">
                <h1 className="mb-4">Terms and Conditions</h1>
                <p>Welcome to <strong>PORO SPACE</strong>. By using our website, you agree to the following terms and conditions. Please read them carefully.</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>

                <h2>2. Use of Website</h2>
                <p>You agree to use this website only for lawful purposes. You are prohibited from violating any applicable local, national, or international law.</p>

                <h2>3. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and images, is the property of PORO SPACE and protected by copyright laws.</p>

                <h2>4. Limitation of Liability</h2>
                <p>We shall not be held liable for any damages arising out of the use or inability to use the website and its services.</p>

                <h2>5. Privacy Policy</h2>
                <p>Your use of our website is also governed by our <Link href="/privacypolicy">Privacy Policy</Link>.</p>

                <h2>6. Changes to Terms</h2>
                <p>We reserve the right to update or modify these terms at any time without prior notice.</p>

                <h2>7. Contact Us</h2>
                <p>If you have any questions regarding these terms, please contact us at: <a href="mailto:support@porospace.com">support@porospace.com</a></p>
            </section>

            <Footer />
        </>
    )
}