import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service,setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data =>setService(data));
    },[])
    return (
        <div>
                    <div className='text-center mb-4'>
                        <p className="text-2xl font-bold text-orange-600">Service</p>
                        <h2 className="text-5xl font-semibold">Our Service Area</h2>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            service.map(services => 
                            <ServiceCard 
                            key={services._id}
                            services={services}
                            >

                            </ServiceCard>)
                        }
                    </div>
        </div>
    );
};

export default Services;