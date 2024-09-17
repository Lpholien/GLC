import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
    <h4 className="text-xs sm:text-sm md:text-base font-bold mb-4 text-gray-700">{subtitle}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Change Management",
      subtitle: "Navigate Transformation with Confidence",
      description: "In the fast-paced pharma and medical device sectors, change is inevitable. Our Change Management services guide you through regulatory shifts and operational overhauls, minimizing disruption and maximizing adoption. We help your team embrace change, driving innovation while ensuring compliance."
    },
    {
      title: "System Implementation",
      subtitle: "Seamless Integration, Powerful Results",
      description: "Our System Implementation services seamlessly integrate cutting-edge software with your unique processes. From selection to go-live, we ensure smooth transitions, enhanced efficiency, and improved data integrity. Experience streamlined compliance and maximum ROI with minimal disruption to your operations."
    },
    {
      title: "Data Migration",
      subtitle: "Your Data, Transformed and Secured",
      description: "Our Data Migration services ensure your critical information transitions safely to new systems. We meticulously plan, execute, and validate each migration, maintaining data integrity and regulatory compliance. Transform your data landscape securely, unlocking new possibilities while upholding the highest quality standards."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};