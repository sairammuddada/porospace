"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Availability() {


    return (
        <>
            <Navbar />

            <div className="py-5 text-white text-center" style={{ backgroundColor: "var(--primary)" }}>
                <div className="container mt-5 py-5">
                    <h1 className="fw-bold">Latest Space Availability</h1>
                    <p className="lead">Browse and connect with travelers offering extra luggage space.</p>
                </div>
            </div>


            <section className="py-5">
                <div className="container">
                    <div className="row mb-4">

                        <div className="col-md-3 position-relative dropdown">
                            <input
                                className="form-control pe-5"
                                list="optionsList"
                                placeholder="Search and select"
                            />
                            <datalist id="optionsList">
                                <option value="Action" />
                                <option value="Another action" />
                                <option value="Something else here" />
                                <option value="India" />
                                <option value="USA" />
                                <option value="UK" />
                                <option value="Canada" />
                            </datalist>
                        </div>

                        <div className="col-md-3">
                            <select id="weightFilter" className="form-select">
                                <option value="">All Weights</option>
                                <option value="2">Up to 2 kgs</option>
                                <option value="3">Up to 3 kgs</option>
                                <option value="5">Up to 5 kgs</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <input type="date" id="dateFilter" className="form-control" />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
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
                </div>
                <div className="text-center">
                    <button className="load-more-btn">Load More</button>
                </div>
            </section>
            <Footer />
        </>
    )
}