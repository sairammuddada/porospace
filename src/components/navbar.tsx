import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <nav id="mainNavbar" className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? "scrolled bg-white shadow-sm" : ""}`}>
                <div className="container">
                    <Link href="/" className="navbar-brand fw-bold">
                        {scrolled ? (
                            <Image src="/assets/porospace-blue.png"
                                alt="Porospace"
                                width={150}
                                height={50}
                            />
                        ) : (
                            <Image
                                src="/assets/porospace-white.png"
                                alt="Porospace"
                                width={150}
                                height={50}
                            />
                        )}
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav"
                    >
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/availability">Space Availability</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us </Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/blogs">Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/register">Register</Link></li>
                            <li className="nav-item ms-3"><Link className="btn btn-primary rounded-pill menu-myaccount px-3" href="/myaccount" >  My Account </Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}