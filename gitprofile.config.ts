// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'YashasaveeKesarwani99', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'YashasaveeKesarwani99/streamify',
          'YashasaveeKesarwani99/recruiter-flow',
          'YashasaveeKesarwani99/chat-app-flipkart',
          'YashasaveeKesarwani99/user-inventory',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Management App',
          description:
            'DEVELOPED A FULL STACK WEB APP ENABLiNG EFFiCiENT TRACKiNG OF PROJECT PROGRESS, USER MANAGEMENT AND DEADLiNE MONiTORiNG.'.toLowerCase(),
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/YashasaveeKesarwani99/project-management-app',
        },
        {
          title: 'Raster Playground',
          description:
            'ENHANCiNG UI OF AN iN‐HOUSE OPEN‐SOURCE PROJECT HOSTED BY BLUE SKY ANALYTiCS TO SHARPEN MY GIS AND UI SKiLLS.'.toLocaleLowerCase(),
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/YashasaveeKesarwani99/project-management-app',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Yashasavee Kesarwani',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'yashasavee-kesarwani-962902193',
    twitter: '',
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
    dev: 'yashasaveekesarwani99',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'yashasvikesarwani1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1j9zuyRnLP09HKUWpt3AHKpdu8lMdV0Wr/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'ReactJS',
    'NodeJS',
    'Component libraries - Antd, MaterialUI, etc',
    'CSS libraries - Tailwind',
    'SASS',
    'Design System',
    'Software Architecture',
    'OOPS',
    'Functional Programming',
  ],
  experiences: [
    {
      company: 'Karbon',
      position: 'Software Engineer - Frontend',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/karbonbusiness/',
    },
    {
      company: 'Blue Sky Analytics',
      position: 'Software Engineer - Frontend',
      from: 'October 2022',
      to: 'October 2023',
      companyLink: 'https://www.linkedin.com/company/blueskyhq/',
    },
    {
      company: 'Outofbox',
      position: 'Frontend Developer',
      from: 'February 2022',
      to: 'October 2022',
      companyLink: 'https://www.linkedin.com/company/outofbox-advertising/',
    },
    {
      company: 'Zartek Technologies',
      position: 'React Developer - Intern',
      from: 'July 2021',
      to: 'February 2022',
      companyLink: 'https://www.linkedin.com/company/zartek-tech/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Triplebyte Certified',
  //     body: 'credentialID - QydVAmI',
  //     year: 'September 2022',
  //     link: 'https://triplebyte.com/tb/yashasavee-kesarwani-dr4ki7v/certificate',
  //   },
  // ],
  educations: [
    {
      institution: 'Chitkara University',
      degree: 'BE-CSE',
      from: '9.78',
      to: '10',
    },
    {
      institution: 'St. Josephs College',
      degree: 'Intercollege',
      from: '90.5',
      to: '100',
    },
  ],
  publications: [
    {
      title: 'Blogspot',
      conferenceName: '',
      journalName: 'The Art of System Design',
      authors: 'self',
      link: 'https://godspeed-engineering-stuff.blogspot.com/2024/06/the-art-of-system-design-crafting.html',
      description:
        'Designing the front end of a web application is akin to orchestrating a symphony. Each component must work in harmony to deliver an engaging, seamless user experience. While the backend handles data processing and business logic, the frontend is the face of your application—the interface through which users interact. A well-designed frontend not only makes your app visually appealing but also intuitive and efficient. Lets dive into the theoretical aspects of frontend system design, exploring the key principles and components.',
    },
    {
      title: 'Blogspot',
      conferenceName: '',
      journalName: 'Designing a Robust System Architecture with React',
      authors: 'self',
      link: 'https://godspeed-engineering-stuff.blogspot.com/2024/06/designing-robust-system-architecture.html',
      description:
        'React, a popular JavaScript library for building user interfaces, has revolutionized frontend development. Its component-based architecture, efficient rendering with the virtual DOM, and a vibrant ecosystem make it a powerful tool for developing modern web applications. However, the success of a React application is not solely dependent on the library itself but also on the system architecture that underpins it. In this blog post, we will explore the theoretical aspects of designing a robust system architecture with React, ensuring scalability, maintainability, and performance.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'yashasaveekesarwani99', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
