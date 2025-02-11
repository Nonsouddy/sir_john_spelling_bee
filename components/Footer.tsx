
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from 'lucide-react';

interface IconProps {
  size: number;
  color: string;
}

const TiktokIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.14-.14z"/>
  </svg>
);

const WhatsappIcon: React.FC<IconProps> = ({ size, color }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
  >
    <path d="M17.472 14.382c-.297-.15-1.752-.867-2.02-.966-.267-.1-.461-.15-.656.15-.194.3-.758.966-.929 1.16-.171.194-.342.219-.638.072-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.65-2.057-.172-.296-.019-.456.131-.604.134-.133.297-.347.446-.52.148-.173.198-.296.297-.492.1-.194.05-.367-.025-.517-.075-.148-.656-1.58-.9-2.165-.238-.584-.48-.504-.656-.514-.171-.01-.367-.013-.562-.013a1.082 1.082 0 0 0-.779.362c-.265.31-1.008 1.002-1.008 2.437 0 1.436 1.04 2.824 1.189 3.022.148.197 2.105 3.178 5.1 4.461.714.308 1.269.492 1.704.63.717.227 1.37.195 1.887.119.575-.085 1.752-.717 1.998-1.413.246-.696.246-1.283.171-1.404-.074-.121-.27-.196-.567-.344m-5.434 7.058h-.005c-1.582 0-3.137-.425-4.49-1.227l-.322-.192-3.335 1.003 1.012-3.406-.211-.334a9.373 9.373 0 0 1-1.399-4.876c0-5.207 4.26-9.45 9.508-9.45 2.53 0 4.91.984 6.697 2.774a9.443 9.443 0 0 1 2.766 6.736c-.002 5.207-4.26 9.45-9.506 9.45M20.413 3.498A11.507 11.507 0 0 0 12.04 0C5.433 0 .15 5.256.148 11.828c0 2.08.543 4.109 1.573 5.907L0 24l6.335-1.652a11.613 11.613 0 0 0 5.651 1.576h.005c6.604 0 11.89-5.254 11.893-11.826a11.608 11.608 0 0 0-3.412-8.3z"/>
  </svg>
);

const ResponsiveFooter = () => {
  const socialIcons = [
    { Icon: Facebook, color: "#1877F2", name: "Facebook" },
    { Icon: TiktokIcon, color: "#000000", name: "TikTok" },
    { Icon: Instagram, color: "#E1306C", name: "Instagram" },
    { Icon: Twitter, color: "#1DA1F2", name: "X" },
    { Icon: Youtube, color: "#FF0000", name: "YouTube" },
    { Icon: WhatsappIcon, color: "#25D366", name: "WhatsApp" }
  ];

  return (
    <footer className="bg-gray-900 text-white px-4 py-12">
      <div className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img 
            src="/api/placeholder/150/50" 
            alt="Company Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Quick Links and Social Container */}
        <div className="flex-grow border-b-2 border-gray-700 pb-8">
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mb-8 border-b-2">
            {['Company', 'Services', 'Support', 'Legal'].map((section) => (
              <div 
                key={section} 
                className="md:w-1/4"
              >
                <h4 className="font-bold mb-4 text-lg">{section}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['About', 'Team', 'Careers'].map((link) => (
                    <li key={link} className="hover:text-white transition">
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-8">
            {socialIcons.map(({ Icon, color, name }) => (
              <div 
                key={name} 
                className="flex flex-col items-center border-r-2 border-gray-700 pr-6 last:border-r-0 hover:bg-gray-800 p-2 transition-all duration-300"
              >
                <a 
                  href="#" 
                  className="hover:scale-110 transition mb-2"
                >
                  <Icon color={color} size={24} />
                </a>
                <span className="text-xs text-gray-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default ResponsiveFooter;