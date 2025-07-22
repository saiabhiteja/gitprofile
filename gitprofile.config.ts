// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'saiabhiteja', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/saiabhiteja/saiabhiteja.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/saiabhiteja/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['saiabhiteja/my-project1', 'saiabhiteja/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'saiabhiteja/Plant-Disease-Detection',
          'saiabhiteja/Quora-Question-Pairs',
          'saiabhiteja/Fakenews-Classifier',
          'saiabhiteja/covid-19-cases-predicition',
          // Add more repositories here in format: 'username/repository-name'
          // Example: 'saiabhiteja/another-project',
          // Example: 'saiabhiteja/portfolio-website',
        ] // List of repository names to display. example: ['saiabhiteja/my-project1', 'saiabhiteja/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Six Degrees of Spotify Music',
          description:
            'An interactive web application that demonstrates the "Six Degrees of Separation" concept applied to music artists. Users can explore connections between musicians through collaboration chains. Features include artist search, connection visualization, and interactive graphs showing how artists are linked through collaborations and musical partnerships.',
          imageUrl:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
          link: 'https://github.com/saiabhiteja/six-degrees-spotify-music',
          skills: ['Spotify API', 'Neo4j', 'spring boot','java'],
        },
        {
          title: 'Subscription Management System',
          description:
            'A comprehensive web application that helps users track, manage, and optimize their recurring subscriptions. Features include automated billing reminders, spending analytics, subscription categorization, and cost optimization recommendations. The system provides real-time notifications and an intuitive dashboard for better financial management and spending control.',
          imageUrl:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
          link: 'https://github.com/saiabhiteja/subscription-management',
          skills: ['Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'CSS3', 'HTML5'],
        },
        {
          title: 'RAG Chatbot',
          description:
            'A lightweight Retrieval-Augmented Generation (RAG) chatbot that combines the power of large language models with external knowledge retrieval. The system provides accurate and contextual responses by retrieving relevant information from knowledge bases. Features include document ingestion, semantic search, and conversational memory for enhanced user interactions.',
          imageUrl:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
          link: 'https://github.com/saiabhiteja/rag-based-chatbot',
          skills: ['Python', 'LangChain', 'OpenAI API', 'pinecone', 'streamlit'],
        },
        {
          title: 'iPhone 15 Pro Website Clone',
          description:
            'A pixel-perfect clone of the Apple iPhone 15 Pro website showcasing modern web development techniques. Features include smooth scroll animations, interactive 3D product visualization, responsive design, and performance-optimized components that replicate Apple\'s premium user experience and design aesthetics.',
          imageUrl:
            'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center',
          link: 'https://github.com/saiabhiteja/iphone15pro-website-clone',
          skills: ['React', 'GSAP', 'Three.js', 'Tailwind CSS', 'JavaScript', '3D Graphics', 'WebGL'],
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sai Abhiteja',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'saiabhitejachepuri',
    x: '', // Add your Twitter/X username if you have one
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '', // Add your personal website if you have one
    phone: '',
    email: 'saiabhitejachepuri@gmail.com',
    leetcode: 'saiabhiteja', // Add your LeetCode username
    geeksforgeeks: 'saiabhiteja', // Add your GeeksForGeeks username
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/14seZlOWXdpPCvWBFL55erir5RksyJjZL/view', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // Programming Languages
    'C++',
    'Python',
    'Java',
    'SQL',
    // Technologies & Frameworks
    'Spring Framework',
    'gRPC',
    'React',
    'Node.js',
    'Express.js',
    'Django',
    'Docker',
    'Kubernetes',
    'Prometheus',
    'Jenkins',
    // Databases
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Neo4j',
    // Tools & Platforms
    'Git',
    'AWS',
    'Power BI',
    'Uber Cadence',
    'Cloud Custodian',
    'AWS Nuke',
    'Micro Services Architecture',
  ],
  experiences: [
    {
      company: 'Cloudera',
      position: 'Software Engineer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.cloudera.com/',
      location: 'Bangalore, India',
      description: 'Built an end-to-end Platform-as-a-Service (PaaS) Trials system for Cloudera\'s Public Cloud, allowing users to explore product capabilities through a simple sign-up flow. Designed and developed Admin Console UI and backend REST APIs for complete lifecycle management of cloud trials. Architected and implemented Cadence workflows to automate cloud resource provisioning, trial lifecycle management, and cleanup operations. Integrated Cloudera Data Engineering (CDE) and Cloudera AI into the Trials platform by working closely with cross-functional product and infrastructure teams. Developed the CDP Landing Page UI to offer a unified experience across Cloudera\'s Hybrid Cloud ecosystem. Improved internal CDP CLI tools to enhance performance and interoperability across multiple system components. Configured monitoring and alerting systems using DataDog and Prometheus for real-time visibility, error detection, and reduced incident resolution time.',
      technologies: [
        'Java',
        'Spring Framework',
        'gRPC',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
        'MongoDB',
        'AWS',
        'Microservices',
        'Prometheus',
        'DataDog',
        'Uber Cadence',
        'React',
        'Node.js',
        'CDE',
        'Cloudera AI',
        'CDP CLI'
      ],
      achievements: [
        'Automated 98% of trial-related manual processes using Cadence, significantly reducing operational overhead',
        'Helped cut cloud infrastructure costs by 45% through smart automation and lifecycle policies',
        'Played a foundational role in integrating CDE and Cloudera AI into the trials system from the ground up',
        'Recognized with a prestigious "Code Award" for outstanding contributions, high code quality, and delivery excellence'
      ]
    },
    {
      company: 'Cloudera',
      position: 'Software Engineer Intern',
      from: 'January 2023',
      to: 'July 2023',
      companyLink: 'https://www.cloudera.com/',
      location: 'Bangalore, India',
      description: 'Redesigned the Trial UI to enhance overall user experience and usability. Developed new public gRPC APIs to enable efficient and secure communication across distributed systems. Implemented Cloud Custodian policies to automate cleanup of unused resources in cloud environments. Built a custom email domain verification system using DNS lookups, SMTP validation, and blocked domain lists to ensure user authenticity. Gained hands-on experience in full-stack and DevOps tools including React, AWS, Docker, Kubernetes, and Java-based microservices.',
      technologies: [
        'Python',
        'Java',
        'React',
        'Node.js',
        'Docker',
        'AWS',
        'PostgreSQL',
        'Redis',
        'Kafka',
        'gRPC',
        'Cloud Custodian',
        'Kubernetes',
        'DNS',
        'SMTP'
      ],
      achievements: [
        'Reduced cloud infrastructure costs by 56% through smart automation with Cloud Custodian',
        'Contributed production-grade UI and backend features as an intern, showcasing strong ownership and impact',
        'Strengthened system security and data quality by successfully preventing fake/invalid signups through the custom email verification system'
      ]
    },
    {
      company: 'MAQ Software',
      position: 'Associate Software Engineer (Internship)',
      from: 'May 2022',
      to: 'July 2022',
      companyLink: 'https://maqsoftware.com/',
      location: 'Hyderabad, India',
      description: 'Constructed robust ETL data pipelines to ensure data readiness, consistency, and reliability for downstream reporting and analytics. Executed and optimized complex SQL queries to perform thorough data validation and ensure data integrity across systems. Developed data models and collaborated on Power BI dashboards and reports, enabling stakeholders to visualize and analyze key metrics for informed business decisions.',
      technologies: [
        'Power BI',
        'DAX',
        'SQL',
        'Python',
        'Excel',
        'Azure',
        'ETL',
        'Data Modeling',
        'Data Validation'
      ],
      achievements: [
        'Achieved a 35% improvement in SQL query performance through advanced query optimization techniques',
        'Delivered actionable insights that directly influenced strategic business initiatives by building impactful Power BI visualizations',
        'Ensured high data quality and trustworthiness by implementing rigorous validation and transformation workflows'
      ]
    },
    {
      company: 'Enviropromise',
      position: 'Machine Learning Intern',
      from: 'May 2021',
      to: 'July 2021',
      companyLink: '',
      location: 'Remote',
      description: 'Built and deployed a Django-based analytics dashboard to monitor real-time sales trends and generate data-driven product recommendations. Developed an NLP pipeline to analyze customer reviews, extracting sentiment and key themes to inform personalized marketing strategies. Led a team of 10 members during the internship, effectively coordinating development tasks and ensuring timely delivery of project milestones.',
      technologies: [
        'Python',
        'Django',
        'NLP',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Jupyter Notebooks',
        'Analytics Dashboard',
        'Sentiment Analysis'
      ],
      achievements: [
        'Boosted sales by 60% by delivering actionable insights through the real-time analytics dashboard and intelligent product suggestions',
        'Enabled targeted marketing campaigns by leveraging NLP-driven customer feedback analysis',
        'Demonstrated strong leadership and project ownership by managing a cross-functional team and successfully delivering a production-grade solution'
      ]
    },
  ],
  certifications: [
    {
      name: 'Mastering Data Structure using C and C++',
      body: 'Udemy Certificate',
      year: 'Jan 2023',
      link: 'https://www.udemy.com/certificate/UC-63524d0d-3983-4473-b96d-cf20c3369c6a/',
    },
    {
      name: 'Machine learning',
      body: 'Udemy Certificate',
      year: 'Sep 2020',
      link: 'https://www.udemy.com/certificate/UC-49039ef3-eec0-45cb-8915-12eb5ac27275/',
    },
    {
      name: 'Python A-Z',
      body: 'Udemy Certificate',
      year: 'Jan 2020',
      link: 'https://www.udemy.com/certificate/UC-8fcc67c2-98ec-4070-bf85-696afd4b5bfd/',
    },
  ],
  educations: [
    {
      institution: 'National Institute of Technology, Silchar',
      degree: 'B.Tech- Computer Science and Engineering',
      from: '2019',
      to: '2023',
      gpa: '9.06/10.0',
      percentage: '',
      grade: 'A',
      location: 'Silchar, Assam',
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate- Telangana State Board',
      from: '2017',
      to: '2019',
      percentage: '97.7',
      grade: 'A+',
      location: 'Hyderabad, Telangana',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  researchExperiences: [
    // {
    //   title: 'Machine Learning Research Project',
    //   institution: 'National Institute of Technology, Silchar',
    //   supervisor: 'Dr. John Smith',
    //   from: 'January 2023',
    //   to: 'May 2023',
    //   description: 'Conducted research on advanced machine learning algorithms for natural language processing applications.',
    //   link: 'https://github.com/saiabhiteja/research-project',
    //   imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
    // },
    // {
    //   title: 'Machine Learning Research Project',
    //   institution: 'National Institute of Technology, Silchar',
    //   supervisor: 'Dr. John Smith',
    //   from: 'January 2023',
    //   to: 'May 2023',
    //   description: 'Conducted research on advanced machine learning algorithms for natural language processing applications.',
    //   link: 'https://github.com/saiabhiteja/research-project',
    //   imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
    // }
    // Add more research experiences here
  ],
  hackathons: [
    {
      title: 'North East India Hackathon 2023',
      organizer: 'North East India',
      position: 'Runner-up',
      date: '2023',
      description: 'Developed a machine learning-powered tea leaf disease detection platform that improves early diagnosis and farming efficiency. The solution helps farmers identify diseases in tea plants at an early stage, enabling timely intervention and better crop management.',
      link: 'https://github.com/saiabhiteja/tea-disease-detection',
      imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop&crop=center',
    },
    // {
    //   title: 'MINeD Hackathon',
    //   organizer: 'MINeD',
    //   position: 'Winner - Healthcare Track',
    //   date: 'March 2023',
    //   description: 'Developed InstantMD, an investigation, medication and chief complaint recognition application using Natural Language Processing.',
    //   link: 'https://github.com/saiabhiteja/InstantMD',
    //   imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&crop=center',
    // },
    {
      title: 'Kaggle Competitions & Expert Status',
      organizer: 'Kaggle',
      position: '3x Kaggle Expert',
      date: '2022',
      description: 'Earned Kaggle Expert status through exceptional performance in competitive machine learning challenges. Achieved 21st place in the 30DaysML competition and 17th place in the Tabular Playground series, showcasing expertise in time-series forecasting, feature engineering, and ensemble modeling techniques.',
      link: 'https://www.kaggle.com/saiabhiteja',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
    }
    // Add more hackathons here
  ],
  // Contact information
  contact: {
    email: 'saiabhitejachepuri@gmail.com',
    phone: '',
    location: 'Hyderabad, Telangana, India',
    linkedin: 'saiabhitejachepuri',
    preferredContact: ['email', 'linkedin'],
  },
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // Add your dev.to or medium username if you have one
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️ by Sai Abhiteja`,

  enablePWA: true,
};

export default CONFIG;
