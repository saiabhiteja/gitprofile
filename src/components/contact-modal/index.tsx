import React from 'react';
import { FaEnvelope, FaLinkedin, FaTimes } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
  linkedin?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  email,
  linkedin,
}) => {
  if (!isOpen) return null;

  const handleEmailClick = () => {
    if (email) {
      window.open(`mailto:${email}`, '_blank');
    }
  };

  const handleLinkedInClick = () => {
    if (linkedin) {
      window.open(`https://www.linkedin.com/in/${linkedin}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-base-100 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-6 border-b border-base-300">
          <h3 className="text-lg font-semibold text-base-content">Get In Touch</h3>
          <button
            onClick={onClose}
            className="text-base-content hover:text-primary transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="text-center mb-4">
            <p className="text-base-content opacity-80 text-sm leading-relaxed">
              I'm always open to new ideas, opportunities, and interesting discussions. 
              Whether it's about technology, collaboration, or just a friendly chat, 
              I'd love to hear from you!
            </p>
          </div>
          
          {email && (
            <button
              onClick={handleEmailClick}
              className="w-full flex items-center space-x-3 p-4 rounded-lg border border-base-300 hover:border-primary hover:bg-base-200 transition-all duration-200"
            >
              <FaEnvelope className="text-primary text-xl" />
              <div className="text-left">
                <p className="font-semibold text-base-content">Email</p>
                <p className="text-sm text-base-content opacity-70">{email}</p>
              </div>
            </button>
          )}

          {linkedin && (
            <button
              onClick={handleLinkedInClick}
              className="w-full flex items-center space-x-3 p-4 rounded-lg border border-base-300 hover:border-primary hover:bg-base-200 transition-all duration-200"
            >
              <FaLinkedin className="text-primary text-xl" />
              <div className="text-left">
                <p className="font-semibold text-base-content">LinkedIn</p>
                <p className="text-sm text-base-content opacity-70">Connect on LinkedIn</p>
              </div>
            </button>
          )}
        </div>

        <div className="p-6 border-t border-base-300">
          <button
            onClick={onClose}
            className="w-full btn btn-outline btn-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 