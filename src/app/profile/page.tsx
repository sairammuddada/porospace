"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Profile() {

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
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="profile-card p-4">

                            <div className="text-center mb-4">
                                <img src="assets/temp/user.jpg" alt="Profile" className="profile-img mb-2" style={{ height: "80px", borderRadius: "50%", overflow: "hidden" }}
                                />
                                <br />
                                <label className="btn btn-outline-primary btn-upload btn-sm mt-2">
                                    <i className="bi bi-camera"></i> Change Photo
                                    <input type="file" accept="image/*" />
                                </label>
                            </div>

                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="John"
                                            readOnly
                                        />                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" value="Doe" readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" value="john.doe@example.com" readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" value="+91 9876543210" readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Country</label>
                                        <select className="form-select" defaultValue="India">
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" value="Hyderabad" readOnly />
                                    </div>
                                    <div className="col-12">
                                        <h4>Let the people know more about you</h4>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Bio</label>
                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            defaultValue="Passionate developer, traveler, and foodie."
                                        ></textarea>                                    </div>
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-linkedin fs-4"></i></span>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-twitter-x fs-4"></i></span>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-facebook fs-4"></i></span>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-instagram fs-4"></i></span>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end mt-4">
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}