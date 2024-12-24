import React from 'react';

const Footer = () => (
  <footer className="bg-purple text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">FlowhiveAI</h3>
          <p className="text-white/70">
            Transforming businesses through intelligent automation solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
          <ul className="space-y-2">
            {['Services', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(' ', '-')}`} 
                   className="text-white/70 hover:text-primary transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
          <ul className="space-y-2 text-white/70">
            <li>5650 Yonge St</li>
            <li>North York, ON, M2M 4G3</li>
            <li>automations@flowhive.com</li>
            <li>(825-500-5443)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-primary">Business Hours</h3>
          <ul className="space-y-2 text-white/70">
            <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday-Sunday: 10:00 AM - 5:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
        <p>&copy; {new Date().getFullYear()} FlowhiveAI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;