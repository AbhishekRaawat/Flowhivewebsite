import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Portfolio = () => {
  const cases = [
    {
      title: 'Manufacturing Process Optimization',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'High production costs and quality inconsistencies',
      solution: 'Implemented AI-powered predictive maintenance and quality control',
      results: [
        '32% reduction in maintenance costs',
        '45% decrease in defect rates',
        '$2.5M annual savings',
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      tech: ['TensorFlow', 'Computer Vision', 'IoT Sensors'],
    },
    {
      title: 'Supply Chain Optimization',
      client: 'LogisticsPro International',
      industry: 'Logistics',
      challenge: 'Inefficient inventory management and delivery routes',
      solution: 'Deployed ML-based demand forecasting and route optimization',
      results: [
        '28% reduction in delivery times',
        '40% improvement in inventory accuracy',
        '22% cost savings in transportation',
      ],
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800',
      tech: ['Python', 'Machine Learning', 'GPS Integration'],
    },
    {
      title: 'Customer Service Automation',
      client: 'TechRetail Solutions',
      industry: 'Retail',
      challenge: 'High customer service costs and response times',
      solution: 'Implemented AI chatbot and customer analytics platform',
      results: [
        '65% reduction in response time',
        '45% decrease in support tickets',
        '92% customer satisfaction rate',
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      tech: ['NLP', 'ChatGPT API', 'Custom ML Models'],
    },
    {
      title: 'Financial Risk Assessment',
      client: 'Global Banking Corp',
      industry: 'Finance',
      challenge: 'Manual risk assessment processes and high error rates',
      solution: 'Developed AI-powered risk assessment and fraud detection system',
      results: [
        '75% faster risk assessments',
        '60% reduction in fraud cases',
        '$5M saved in potential losses',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['Deep Learning', 'Natural Language Processing', 'Big Data Analytics'],
    },
  ];

  return (
    <div>
      {/* Hero Section <boltAction type="file" filePath="src/pages/Portfolio.tsx">      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore how we've helped businesses transform their operations with
            intelligent automation solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                    {study.industry}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{study.client}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline">View Full Case Study</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The AI solutions provided by AutomateAI have revolutionized our manufacturing processes. We've seen unprecedented improvements in efficiency and quality control.",
                author: "John Smith",
                role: "CTO, Global Manufacturing Corp",
              },
              {
                quote: "Working with AutomateAI has been transformative for our business. Their expertise in AI and automation has helped us stay ahead of the competition.",
                author: "Sarah Johnson",
                role: "Operations Director, LogisticsPro International",
              },
              {
                quote: "The results we've achieved with AutomateAI's solutions have exceeded our expectations. Our customer service capabilities have been completely transformed.",
                author: "Michael Chen",
                role: "CEO, TechRetail Solutions",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;