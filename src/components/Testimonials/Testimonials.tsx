import { useEffect, useState } from "react";
import { Testimonial } from "./TestimonialsItem";
import { ITestimonials } from "../../types/testimonial";
// import styles from './Testimonials.module.css';

export function Testimonials() {
    const [testimonial, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/testimonials')
            .then((res) => res.json())
            .then((data) => setTestimonials(data));
    }, []);

    return (
        <section className="bg-light-gray py-16 px-0">
            <div className="container">
                <h2 className="max-w-[670px] mt-0 mx-auto mb-12 text-center">Don't take our word for it. See what customers are saying about us.</h2>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonial.map((item: ITestimonials) => (
                        <Testimonial key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}