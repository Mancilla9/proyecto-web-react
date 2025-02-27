
import { useEffect, useState } from 'react';
import { ServiceItem } from './ServiceItem';
import { IServiceItem } from '../../types/serviceItem';
// import styles from './Services.module.css';

export function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    console.log(services, "servicios");
    return (
        <section className="bg-light-gray py-12 px-0">
            <div className="container">
                <h2 className='max-w-[655px] mt-0 mx-auto mb-16 text-center'>
                    The service we offer is specifically designed to meet your needs.</h2>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {services.map((service: IServiceItem) => (
                        <ServiceItem 
                        key={service.id}
                        {...service}
                        // image={service.image} 
                        // title={service.title} 
                        // description={service.description} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}