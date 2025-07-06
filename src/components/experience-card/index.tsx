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
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="my-0.5 text-xs">{time}</div>
        <h3 className="font-semibold">{position}</h3>
        <div className="mb-4 font-normal">
          <a href={companyLink} target="_blank" rel="noreferrer">
            {company}
          </a>
        </div>
      </div>
      {hasDetails && (
        <button
          onClick={onClick}
          className="btn btn-sm btn-outline btn-primary flex-shrink-0"
        >
          More Info
        </button>
      )}
    </div>
  </li>
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
        <ListItem
          key={index}
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
        />,
      );
    }

    return array;
  };
  return (
    <>
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              {loading ? (
                skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              ) : (
                <span className="text-base-content opacity-70">Experience</span>
              )}
            </h5>
          </div>
          <div className="text-base-content text-opacity-60">
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              {loading ? (
                renderSkeleton()
              ) : (
                <Fragment>
                  {experiences.map((experience, index) => (
                    <ListItem
                      key={index}
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
                  ))}
                </Fragment>
              )}
            </ol>
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
