"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function MyAccount() {

    return (
        <>
            <Navbar />

            <div
                className="py-5 text-white text-center"
                style={{ backgroundColor: "var(--primary)" }}
            >
                <section className="profile-header mt-5">
                    <div>
                        <div>
                            <img src="assets/temp/user.jpg" alt="Profile Picture" />
                        </div>
                        <div>
                            <h2>John Doe</h2>
                            <p>Passionate developer, traveler, and foodie. Passionate developer, traveler, and foodie. Passionate developer, traveler, and foodie. </p>
                            <p className="mb-0">john.doe@example.com</p>
                            <p className="mb-0">+91-9876543210</p>
                            <small>Hyderabad, India</small>

                            <div>
                                <a href="#" className="text-light me-3"><i className="bi bi-linkedin fs-4"></i></a>
                                <a href="#" className="text-light me-3"><i className="bi bi-twitter-x fs-4"></i></a>
                                <a href="#" className="text-light me-3"><i className="bi bi-facebook fs-4"></i></a>
                                <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                            </div>
                            <br />
                            <Link href="/profile" className="btn btn-outline-light btn-sm edit-btn">✏️ Edit</Link>

                        </div>
                    </div>
                </section>
            </div>

            <div className="container py-5">
                <h2 className="mb-4 text-center">📦 Luggage Dashboard</h2>

                <ul className="nav nav-tabs" id="luggageTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="my-postings-tab" data-bs-toggle="tab" data-bs-target="#my-postings" type="button" role="tab">
                            My Postings
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="connected-postings-tab" data-bs-toggle="tab" data-bs-target="#connected-postings" type="button" role="tab">
                            Connections
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="chat-postings-tab" data-bs-toggle="tab" data-bs-target="#chats-postings" type="button" role="tab">
                            Chats <b className="count-item">10</b>
                        </button>
                    </li>
                </ul>

                <div className="tab-content p-3 bg-white shadow-sm rounded-bottom" id="luggageTabsContent">

                    <div className="tab-pane fade show active" id="my-postings" role="tabpanel">
                        <h5 className="mb-3">My Postings</h5>
                        <table className="table table-striped align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hyderabad</td>
                                    <td>Bangalore</td>
                                    <td>05 Sep 2025</td>
                                    <td>
                                        <span className="badge bg-success">Active</span>
                                    </td>
                                    <td>
                                        <Link href="/postavailability"><button className="btn btn-sm btn-warning me-1">✏️ Edit</button></Link>
                                        <button className="btn btn-sm btn-secondary">Change Status</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chennai</td>
                                    <td>Pune</td>
                                    <td>10 Sep 2025</td>
                                    <td>
                                        <span className="badge bg-secondary">Inactive</span>
                                    </td>
                                    <td>
                                        <Link href="/postavailability"><button className="btn btn-sm btn-warning me-1">✏️ Edit</button></Link>
                                        <button className="btn btn-sm btn-success">Activate</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="tab-pane fade" id="connected-postings" role="tabpanel">
                        <h5 className="mb-3">Connections</h5>
                        <div className="list-group">
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Delhi ➝ Mumbai</strong><br/>
                                        <small>Date: 07 Sep 2025</small>
                                </div>
                                <span className="badge bg-info">Connected</span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Kolkata ➝ Hyderabad</strong><br/>
                                        <small>Date: 12 Sep 2025</small>
                                </div>
                                <span className="badge bg-info">Connected</span>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="chats-postings" role="tabpanel">
                        <h5 className="mb-3">Chats</h5>
                        <div className="list-group">
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Delhi ➝ Mumbai</strong><br/>
                                        <small>Date: 07 Sep 2025</small>
                                </div>
                                <span className="badge bg-info">Connected</span>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Kolkata ➝ Hyderabad</strong><br/>
                                        <small>Date: 12 Sep 2025</small>
                                </div>
                                <span className="badge bg-info">Connected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}