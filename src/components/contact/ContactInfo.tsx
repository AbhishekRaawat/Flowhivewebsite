import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Card from '../Card';

const ContactInfo = () => {
  const contactCards = [
    {
      icon: <MapPin className="h-6 w-6 text-white flex-shrink-0" />,
      title: 'Office Location',
      content: ['5650 Yonge St, North York, Ontario, Canada'],
    },
    {
      icon: <Clock className="h-6 w-6 text-white flex-shrink-0" />,
      title: 'Business Hours',
      content: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday-Sunday: 10:00 AM - 5:00 PM',
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-white flex-shrink-0" />,
      title: 'Phone',
      content: ['Main: (825-500-5443)', 'Support: (825-500-5443)'],
    },
    {
      icon: <Mail className="h-6 w-6 text-white flex-shrink-0" />,
      title: 'Email',
      content: ['General: automations@flowhive.com'],
    },
  ];

  return (
    <div className="space-y-8">
      {contactCards.map((card, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start space-x-4">
            {card.icon}
            <div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <div className="text-white/70">
                {card.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;