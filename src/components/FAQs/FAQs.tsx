import { useEffect, useState } from "react";
import { FAQ } from "./FAQ";
import { IFaq } from "../../types/faq";
import { Button } from "../Button/Button";
// import styles from './FAQs.module.css';

export function FAQs() {
    const [faqs, setFAQs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/faqs')
            .then((res) => res.json())
            .then((data) => setFAQs(data));
            
    }, []);

    return (
        <section className="bg-gray pt-12 px-0 pb-24">
            <div className="container grid grid-cols-1 gap-20 
            md:gap-8 lg:gap-16 lg:grid-cols-2">
                <div className="left">
                    <h2 className="mb-5">If you don't see an answer to
                        your question, you can send us
                        an email from our contact form.</h2>
                    <p className="mb-5">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                        sem nec elit. Nullam quis risus eget urna mollis ornare.</p>
                        <Button content="ALL FAQ" href="/faqs"/>
                </div>
                <div className="right">
                    <div className="flex flex-col gap-5">
                        {faqs.map((item: IFaq)=>(
                            <FAQ key={item.id} {...item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}