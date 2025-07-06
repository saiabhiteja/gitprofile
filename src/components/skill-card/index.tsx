import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: string[];
}) => {
  // Function to categorize skills based on their position in the array
  const categorizeSkills = (skills: string[]) => {
    const categories: { [key: string]: string[] } = {
      'Programming Languages': [],
      'Technologies & Frameworks': [],
      'Databases': [],
      'Tools & Platforms': [],
      'Other': []
    };
    
    // Based on the current skills array structure
    const programmingLanguages = ['C++', 'Python', 'Java', 'SQL'];
    const technologiesFrameworks = ['Spring Framework', 'gRPC', 'React', 'Node.js', 'Express.js', 'Django', 'Docker', 'Kubernetes', 'Prometheus', 'Jenkins'];
    const databases = ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j'];
    const toolsPlatforms = ['Git', 'AWS', 'Power BI', 'Uber Cadence', 'Cloud Custodian', 'AWS Nuke', 'Micro Services Architecture'];
    
    skills.forEach(skill => {
      if (programmingLanguages.includes(skill)) {
        categories['Programming Languages'].push(skill);
      } else if (technologiesFrameworks.includes(skill)) {
        categories['Technologies & Frameworks'].push(skill);
      } else if (databases.includes(skill)) {
        categories['Databases'].push(skill);
      } else if (toolsPlatforms.includes(skill)) {
        categories['Tools & Platforms'].push(skill);
      } else {
        categories['Other'].push(skill);
      }
    });
    
    // Remove empty categories
    return Object.fromEntries(
      Object.entries(categories).filter(([_, skills]) => skills.length > 0)
    );
  };

  const skillCategories = categorizeSkills(skills);
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-center">
              {renderSkeleton()}
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(skillCategories).map(([category, categorySkills]) => (
                <div key={category} className="space-y-3">
                  <h6 className="text-sm font-semibold text-base-content opacity-80 border-b border-base-300 pb-1">
                    {category}
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={index}
                        className="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
