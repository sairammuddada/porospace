"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Register() {

    return (
        <>
            <Navbar />
            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Create Account</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <div className="signup-container">
                <h2>Create an Account</h2>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter your full name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" className="form-control" placeholder="Enter your mobile number" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter a strong password" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Re-enter password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <br />

                <button className="btn btn-google">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                    Sign up with Google
                </button>
                <br />
                <div className="signup-footer">
                    <p>Already have an account? <a href="login.html">Login</a></p>
                </div>
            </div>
            <Footer />
        </>
    )
}