import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { ga, skeleton } from '../../utils';
import { SanitizedResearchExperience } from '../../interfaces/sanitized-config';

/**
 * Renders a research experience card component.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {string} props.header - The header text for the research experiences section.
 * @param {SanitizedResearchExperience[]} props.researchExperiences - Array of research experiences.
 * @param {string} props.googleAnalyticId - Google Analytics ID for tracking.
 * @return {JSX.Element} The rendered research experience card component.
 */
const ResearchExperienceCard = ({
  loading,
  header,
  researchExperiences,
  googleAnalyticId,
}: {
  loading: boolean;
  header: string;
  researchExperiences: SanitizedResearchExperience[];
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < researchExperiences.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: 'w-32',
                        heightCls: 'h-8',
                        className: 'mb-2 mx-auto',
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: 'w-full',
                          heightCls: 'h-full',
                          shape: '',
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: 'w-full',
                        heightCls: 'h-4',
                        className: 'mx-auto',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return array;
  };

  const renderResearchExperiences = () => {
    return researchExperiences.map((item, index) => (
      <a
        className="card shadow-lg compact bg-base-100 cursor-pointer"
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click Research Experience', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          if (item.link) {
            window?.open(item.link, '_blank');
          }
        }}
      >
        <div className="p-8 h-full w-full">
          <div className="flex items-center flex-col">
            <div className="w-full">
              <div className="px-4">
                <div className="text-center w-full">
                  <h2 className="font-medium text-center opacity-60 mb-2">
                    {item.title}
                  </h2>
                  {item.imageUrl && (
                    <div className="avatar opacity-90">
                      <div className="w-24 h-24 mask mask-squircle">
                        <LazyImage
                          src={item.imageUrl}
                          alt={'thumbnail'}
                          placeholder={skeleton({
                            widthCls: 'w-full',
                            heightCls: 'h-full',
                            shape: '',
                          })}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mt-2 flex flex-col items-center gap-1">
                    {item.institution && (
                      <p className="text-base-content text-opacity-60 text-xs">
                        {item.institution}
                      </p>
                    )}
                    {item.supervisor && (
                      <p className="text-base-content text-opacity-60 text-xs">
                        Supervisor: {item.supervisor}
                      </p>
                    )}
                    <p className="text-base-content text-opacity-60 text-xs">
                      {item.from} - {item.to}
                    </p>
                  </div>
                  <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderResearchExperiences()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResearchExperienceCard; 