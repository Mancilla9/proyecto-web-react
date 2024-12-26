import { ITestimonials } from "../types/testimonial";

export function Testimonial({author ,image ,area ,testimonial}:ITestimonials) {
    return (
        <div className="testimonial-item">
            <p>{testimonial}</p>
            <div className="testimonial-author">
                <div className="image">
                    <img src={image} />
                </div>
                <div className="bio">
                    <h3>{author}</h3>
                    <p>{area}</p>
                </div>
            </div>
        </div>
    )
}