import { IFaq } from "../../types/faq";
// import styles from './FAQ.module.css';
// import itemStyles from './FAQs.module.css';

export function FAQ({ question, answer }: IFaq) {
    return (
        <div className="cursor-pointer shadow-md">
            <details className="p-5 bg-white rounded">
                <summary className="bg-white text-lg font-semibold
                 maker:text-primary-color">{question}</summary>
                <p>{answer}</p>
            </details>
        </div>

    );
}