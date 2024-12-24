import React from 'react';
import Card from './Card';
import Button from './Button';
import { X } from 'lucide-react';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  if (!isOpen) return null;

  const handleBooking = () => {
    // Open Calendly or your preferred booking system
    window.open('https://calendly.com/automations-flowhiveai/30min');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Schedule Your Discovery Call</h2>
        <p className="text-white/80 mb-6">
          Book a 30-minute consultation with our AI solutions experts. We'll discuss:
        </p>
        
        <ul className="space-y-3 mb-6">
          {[
            'Your business challenges and goals',
            'Potential AI solutions and their impact',
            'Implementation timeline and process',
            'Budget considerations and ROI',
          ].map((item, index) => (
            <li key={index} className="flex items-center text-white/80">
              <span className="w-2 h-2 bg-purple-light rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>

        <Button
          variant="primary"
          className="w-full"
          onClick={handleBooking}
        >
          Book Your Call Now
        </Button>
        
        <p className="text-white/60 text-sm mt-4 text-center">
          By scheduling a call, you agree to our terms of service and privacy policy.
        </p>
      </Card>
    </div>
  );
};

export default BookingModal;