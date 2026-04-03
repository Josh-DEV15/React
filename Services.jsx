import React from 'react';

export default function Services() {
    const services = [
        "Web Development",
        "Frontend Development",
        "Next.js Full Stack Development",
        "Cybersecurity Testing",
        "API & Database Setup",
    ];

    return (
        <section className="services-section">
            <h2>
                Services
                </h2>


                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service}</h3>
                            <p>I provide professional {service.toLowerCase()} services to help your business succeed in the digital world.</p>
                        </div>
                    ))}
                </div>

        </section>
    )
}
