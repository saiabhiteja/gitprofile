import React, { Fragment, useState } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import ExperienceModal from '../experience-modal';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  onClick,
  hasDetails,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  onClick?: () => void;
  hasDetails?: boolean;
}) => (
  <div className="mb-2">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <div className="text-lg font-semibold text-base-content mb-1">
          {position}
        </div>
        <div className="text-base font-medium text-base-content mb-0.5">
          {companyLink ? (
            <a href={companyLink} target="_blank" rel="noreferrer" className="hover:underline">
              {company}
            </a>
          ) : (
            company
          )}
        </div>
        <div className="text-sm text-base-content text-opacity-60 mb-1">
          {time}
        </div>
      </div>
      {hasDetails && (
        <button
          onClick={onClick}
          className="btn btn-sm btn-outline btn-primary flex-shrink-0 self-start md:self-center"
        >
          More Info
        </button>
      )}
    </div>
  </div>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const [selectedExperience, setSelectedExperience] = useState<SanitizedExperience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: SanitizedExperience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100 mb-6" key={index}>
          <div className="card-body">
            <ListItem
              time={skeleton({
                widthCls: 'w-5/12',
                heightCls: 'h-4',
              })}
              position={skeleton({
                widthCls: 'w-6/12',
                heightCls: 'h-4',
                className: 'my-1.5',
              })}
              company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
            />
          </div>
        </div>
      );
    }
    return array;
  };
  return (
    <>
      <div className="card compact bg-base-100 shadow bg-opacity-40">
        <div className="card-body">
          <div className="mx-3 mb-2">
            <h5 className="card-title text-base-content opacity-70 text-2xl font-semibold mb-2">Experience</h5>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {loading
              ? renderSkeleton()
              : experiences.map((experience, index) => (
                  <div className="card shadow-lg compact bg-base-100" key={index}>
                    <div className="card-body">
                      <ListItem
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={
                          experience.companyLink
                            ? experience.companyLink
                            : undefined
                        }
                        onClick={() => handleExperienceClick(experience)}
                        hasDetails={
                          !!experience.description ||
                          (experience.technologies && experience.technologies.length > 0) ||
                          (experience.achievements && experience.achievements.length > 0)
                        }
                      />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ExperienceCard;
