"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Blog() {

    return (
        <>
            <Navbar />

            <div className="blog-header pt-5 pb-5">
                <h1>10 Tips for Better Productivity</h1>
            </div>

            <section className="container my-5">
                <div className="row">
                    <div className="col-lg-8 blog-content">
                        <p className="blog-meta">By <strong>Admin</strong> | March 15, 2025 | Productivity</p>
                        <img src="https://picsum.photos/900/400" alt="Blog image"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque libero at metus
                                posuere, a pulvinar ex volutpat. Integer vel odio in nulla semper commodo. Sed consequat
                                ipsum vel orci fermentum, in blandit urna porta.</p>

                            <p>Aliquam erat volutpat. Fusce mattis metus at urna efficitur luctus. In hac habitasse platea
                                dictumst. Vivamus volutpat nisl eget eros varius, nec facilisis sem malesuada. Nulla facilisi.
                                Suspendisse luctus luctus est, vitae facilisis nisi posuere vel.</p>

                            <h4>Key Takeaways</h4>
                            <ul>
                                <li>Set daily goals and stick to them.</li>
                                <li>Avoid multitasking for better focus.</li>
                                <li>Use tools like Pomodoro timers to stay disciplined.</li>
                            </ul>

                            <p>Morbi nec lacus at quam volutpat pulvinar. Sed blandit quam vel leo laoreet, vel molestie
                                turpis finibus. Integer sit amet odio eros. Aenean scelerisque sem a ex suscipit, nec
                                porttitor leo mattis.</p>
                    </div>

                    <div className="col-lg-4 sidebar">
                        <div className="mb-4">
                            <h5>Recent Posts</h5>
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action">How to Stay Motivated</a>
                                <a href="#" className="list-group-item list-group-item-action">Top 5 Morning Routines</a>
                                <a href="#" className="list-group-item list-group-item-action">Building Healthy Habits</a>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5>Categories</h5>
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action">Productivity</a>
                                <a href="#" className="list-group-item list-group-item-action">Lifestyle</a>
                                <a href="#" className="list-group-item list-group-item-action">Technology</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}