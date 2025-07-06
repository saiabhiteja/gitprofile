import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

interface ContactCardProps {
  email?: string;
  location?: string;
  linkedin?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  email,
  location,
  linkedin,
}) => {
  if (!email && !location && !linkedin) {
    return null;
  }

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">Contact</span>
          </h5>
        </div>
        
        <div className="text-base-content text-opacity-60">
          <div className="space-y-4 mx-4">
            {email && (
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary text-lg" />
                <div>
                  <p className="font-semibold text-base-content">Email</p>
                  <a 
                    href={`mailto:${email}`}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {email}
                  </a>
                </div>
              </div>
            )}

            {/* Phone section removed as requested */}

            {location && (
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary text-lg" />
                <div>
                  <p className="font-semibold text-base-content">Location</p>
                  <p className="text-base-content">{location}</p>
                </div>
              </div>
            )}

            {linkedin && (
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-primary text-lg" />
                <div>
                  <p className="font-semibold text-base-content">LinkedIn</p>
                  <a 
                    href={`https://www.linkedin.com/in/${linkedin}`}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard; 