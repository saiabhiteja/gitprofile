import React from 'react';
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaCode, FaTrophy } from 'react-icons/fa';
import { SanitizedExperience } from '../../interfaces/sanitized-config';

interface ExperienceModalProps {
  experience: SanitizedExperience | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !experience) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-11/12 max-w-4xl">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="font-bold text-2xl text-primary mb-2">
              {experience.position} at {experience.company}
            </h3>
            <div className="flex items-center gap-4 text-base-content opacity-70 mb-3">
              <div className="flex items-center gap-2">
                <FaBuilding className="text-sm" />
                <a
                  href={experience.companyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {experience.company}
                </a>
              </div>
              {experience.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  <span>{experience.location}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-sm" />
                <span>{experience.from} - {experience.to}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
          >
            <FaTimes />
          </button>
        </div>

        <div className="space-y-6">
          {experience.description && (
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                💼 Role Description
              </h4>
              <div className="text-base-content opacity-80 leading-relaxed space-y-3">
                {experience.description.split('. ').map((point, index) => (
                  point.trim() && (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5 flex-shrink-0 w-2">•</span>
                      <span className="flex-1 leading-relaxed">{point.trim()}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FaCode />
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge badge-primary badge-outline"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {experience.achievements && experience.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <FaTrophy />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-base-content opacity-80">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="modal-action">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default ExperienceModal; 