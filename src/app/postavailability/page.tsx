"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function postavailability() {

    return (
        <>
            <Navbar />
            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Post Availability</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <div className="container">
                <div className="form-card">
                    <div className="form-header">
                        <h3>Post Your Luggage</h3>
                        <p className="text-muted">Fill the details to post your luggage request</p>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="from" className="form-label">From</label>
                                <input type="text" className="form-control" id="from" placeholder="Origin city" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="to" className="form-label">To</label>
                                <input type="text" className="form-control" id="to" placeholder="Destination city" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="date" className="form-label">Travel Date</label>
                                <input type="date" className="form-control" id="date" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="time" className="form-label">Time</label>
                                <input type="time" className="form-control" id="time"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                <input type="number" className="form-control" id="weight" placeholder="e.g. 15" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="price" className="form-label">Expected Price (₹)</label>
                                <input type="number" className="form-control" id="price" placeholder="e.g. 500"/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="notes" className="form-label">Additional Notes</label>
                            <textarea className="form-control" id="notes" rows={3} placeholder="Any special instructions..."></textarea>
                        </div>

                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-lg">Post Luggage</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}