import { Button } from "../Button/Button";
// import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className="bg-heading-color py-12 px-0">
            {/* <div className={`container ${styles.footerContainer}`}> */}
            <div className="container grid items-center grid-cols-1 md:grid-cols-2">
                <h2 className="text-white">Join our community by using our
                    services and grow your business.</h2>
                <Button customStyles="justify-self-center" content="Try It For Free" href="/try" />
            </div>
        </footer>
    )
}