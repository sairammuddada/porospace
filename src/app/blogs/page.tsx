"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Blogs() {
   
    return (
        <>
            <Navbar />

            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Blogs</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://picsum.photos/400/250?random=1" className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <span className="badge bg-primary mb-2">Technology</span>
                                    <h5 className="card-title">How AI is Changing the Future</h5>
                                    <p className="card-text text-muted">Artificial Intelligence is revolutionizing industries. Learn how it impacts businesses and daily life.</p>
                                    <Link href="/blog" className="btn btn-sm btn-outline-primary">Read More</Link>
                                </div>
                                <div className="card-footer text-muted small">
                                    Posted on Aug 25, 2025 by Admin
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://picsum.photos/400/250?random=2" className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <span className="badge bg-success mb-2">Lifestyle</span>
                                    <h5 className="card-title">10 Tips for a Healthy Work-Life Balance</h5>
                                    <p className="card-text text-muted">Finding balance between work and personal life is key. Here are practical steps you can apply daily.</p>
                                    <Link href="/blog" className="btn btn-sm btn-outline-success">Read More</Link>
                                </div>
                                <div className="card-footer text-muted small">
                                    Posted on Aug 22, 2025 by Sarah
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <img src="https://picsum.photos/400/250?random=3" className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <span className="badge bg-danger mb-2">Travel</span>
                                    <h5 className="card-title">Top 5 Destinations for 2025</h5>
                                    <p className="card-text text-muted">Looking for your next adventure? Check out these must-visit destinations around the world this year.</p>
                                    <Link href="/blog" className="btn btn-sm btn-outline-danger">Read More</Link>
                                </div>
                                <div className="card-footer text-muted small">
                                    Posted on Aug 20, 2025 by John
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item disabled"><a className="page-link">Previous</a></li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}