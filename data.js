export { TECHS, PROJECTS, SOCIAL_MEDIA };

const JVICTOR_JS_TEXT_MENTION_HTML = '<a href="https://github.com/jvictorjs" target="_blank"><strong class="blue--text">@jvictorjs</strong></a>';

const SOCIAL_MEDIA = [
  { name: "github", url: "https://github.com/jvictorjs", icon: "mdi-github", profile: "jvictorjs", tooltip: "GitHub profile" },
  { name: "portfolio", url: "https://portfolio.jvictor.com.br", icon: "mdi-briefcase", profile: "Portfolio", tooltip: "Portfolio web page" },
  { name: "resume", url: "./assets/jvictor-resume.pdf", icon: "mdi-file-document", profile: "Resume", tooltip: "Download my resume (PDF)" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/joão-victor-ramos-6570a21b7/",
    icon: "mdi-linkedin",
    profile: "LinkedIn",
    tooltip: "LinkedIn profile",
  },
  { name: "twitter", url: "https://twitter.com/jvictor_js", icon: "mdi-twitter", profile: "@jvictor_js", tooltip: "Twitter profile" },
  { name: "youtube", url: "https://www.youtube.com/user/jvwrCIN", icon: "mdi-youtube", profile: "YouTube", tooltip: "My YouTube Channel" },
  { name: "learn", url: "https://courses.jvictor.com.br", icon: "mdi-school", profile: "Course", tooltip: "Learn JavaScript with my video lessons" },
];

const PROJECTS = [
  {
    name: "TremdGol.com",
    nameFull: "TremdGol.com",
    appType: "Web",
    year: 2022,
    tech: "Vue",
    description: "Live soccer matches statistics with a canvas component to draw events.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "tremdgol.com",
    url: "https://tremdgol.com",
    githubRepoURL: "https://github.com/jvictorjs/tremdgol",
    youtubeDemoURL: "https://www.youtube.com/watch?v=2kQNpB26RIQ",
    imgFileName: "project-tremdgol.com.png",
    techsNamesToShowTag: ["Vue", "Vuetify", "REST APIs", "Canvas"],
    allTechs: [
      "REST APIs",
      "Canvas",
      "JavaScript",
      "HTML",
      "CSS",
      "Vue",
      "Vuetify",
      "Events",
      "DOM Manipulation",
      "Material Design Icons",
      "Flexbox",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "Vuex",
      "NPM",
      "Node.js",
    ],
  },
  {
    name: "My Course Platform",
    nameFull: "My Course Platform",
    appType: "Web",
    year: 2022,
    tech: "React",
    description: "Online course platform for my coding video lessons.",
    language: "English<br>Lessons content: Brazilian Portuguese audio with English subtitles",
    languageSymbol: "EN/PT",
    urlLabel: "course.jvictor.com.br",
    url: "https://course.jvictor.com.br",
    githubRepoURL: "https://github.com/jvictorjs/courses-platform",
    youtubeDemoURL: "",
    imgFileName: "project-my-course-platform.png",
    techsNamesToShowTag: ["React", "Vite", "GraphQL", "Apollo Client", "codegen"],
    allTechs: [
      "React",
      "Vite",
      "GraphQL",
      "Apollo Client",
      "codegen",
      "JavaScript",
      "TypeScript",
      "Phosphor Icons",
      "HTML",
      "CSS",
      "Flexbox",
      "Tailwind CSS",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "NPM",
      "Node.js",
    ],
  },
  {
    name: "TremdGol",
    nameFull: "TremdGol",
    appType: "Mobile",
    year: 2021,
    tech: "React Native",
    description: "Live soccer matches statistics mobile app for Android.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "Google Play Store download",
    url: "https://play.google.com/store/apps/details?id=com.bolanarede.tremdgol_free",
    githubRepoURL: "https://github.com/jvictorjs/tremdgol-app",
    youtubeDemoURL: "https://www.youtube.com/watch?v=knUdqEsFIg4",
    imgFileName: "playstore-tremdgol-free-screenshot.png",
    techsNamesToShowTag: ["React", "React Native", "REST APIs", "Expo", "Android Studio"],
    allTechs: [
      "React",
      "React Native",
      "REST APIs",
      "Expo",
      "Axios",
      "Android Studio",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
      "Flexbox",
      "Git",
      "GitHub",
      "React Native SVG Charts",
      "NPM",
      "Node.js",
    ],
  },
  {
    name: "Skills page",
    nameFull: "Skills page",
    appType: "Web",
    year: 2022,
    tech: "Vue",
    description: "Web page to present the technologies and tools that are in my area of expertise.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "skills.jvictor.com.br",
    url: "https://skills.jvictor.com.br",
    githubRepoURL: "https://github.com/jvictorjs/skills-word-cloud",
    youtubeDemoURL: "",
    imgFileName: "project-skills.png",
    techsNamesToShowTag: ["Vue", "Vuetify", "Material Design Icons", "CSS", "Transitions"],
    allTechs: [
      "JavaScript",
      "HTML",
      "CSS",
      "Transitions",
      "DOM Manipulation",
      "Vue",
      "Vuetify",
      "Material Design Icons",
      "Flexbox",
      "Variables",
      "Certbot SSL",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Vim",
      "WinSCP",
    ],
  },

  {
    name: "Telegram Web Clone",
    nameFull: "Telegram Web Clone",
    appType: "Web",
    year: 2022,
    tech: "Vue",
    description: "Personal web page that simulates a message app interface to present my professional skills and experience.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "jvictor.com.br",
    url: "https://jvictor.com.br",
    githubRepoURL: "https://github.com/jvictorjs/telegram-clone",
    youtubeDemoURL: "https://youtu.be/Nm9cWR95-hY",
    imgFileName: "project-telegram-clone.png",
    techsNamesToShowTag: ["Vue", "Vuetify", "Material Design Icons", "Flexbox", "CSS"],
    allTechs: [
      "JavaScript",
      "HTML",
      "CSS",
      "Vue",
      "Vuetify",
      "Material Design Icons",
      "Flexbox",
      "CSS",
      "Flexbox",
      "Certbot SSL",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "Google Apps Script",
      "Telegram Bot API",
      "REST APIs",
      "Web Apps",
    ],
  },

  {
    name: "Avalia ME",
    nameFull: "Avalia ME",
    appType: "Web",
    year: 2021,
    tech: "Vue",
    description: "Employee Performance Evaluation web site of Brazil's Ministry of Economy. It has more than 10.000 active users.",
    language: "Brazilian Portuguese",
    languageSymbol: "PT",
    urlLabel: "avalia.economia.gov.br",
    url: "https://avalia.economia.gov.br",
    githubRepoURL: "",
    youtubeDemoURL: "https://www.youtube.com/watch?v=B3hnfrcYefw",
    imgFileName: "project-avalia-me.png",
    techsNamesToShowTag: ["Vue", "Vuetify", "JavaScript", "HTML", "CSS", "Material Design Icons"],
    allTechs: ["Vue", "Vuetify", "JavaScript", "HTML", "CSS", "Material Design Icons", "Git", "NPM", "Node.js"],
  },
  {
    name: "Fundo a Fundo Dashboard",
    nameFull: "Fundo a Fundo Dashboard",
    appType: "Web",
    year: 2020,
    tech: "Qlik Sense",
    description: "BI Dashboard created to present data from the Brazil's Ministry of Economy.",
    language: "Brazilian Portuguese",
    languageSymbol: "PT",
    urlLabel: "painelfundoafundo.economia.gov.br",
    url: "https://painelfundoafundo.economia.gov.br",
    githubRepoURL: "",
    youtubeDemoURL: "https://www.youtube.com/watch?v=xm1f4tRW0Sg",
    imgFileName: "project-painel-fundo-a-fundo.png",
    techsNamesToShowTag: ["Qlik Sense", "HTML", "CSS", "JavaScript"],
    allTechs: ["Qlik Sense", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Bola na Rede",
    nameFull: "Bola na Rede",
    appType: "Web",
    year: 2021,
    tech: "Angular",
    description: "Web page created to present live soccer games statistics.",
    language: "Brazilian Portuguese",
    languageSymbol: "PT",
    urlLabel: "bolanarede.net.br",
    url: "https://bolanarede.net.br",
    githubRepoURL: "https://github.com/jvictorjs/bolasite",
    youtubeDemoURL: "https://youtu.be/K4GuKwINolQ",
    imgFileName: "project-bolanarede.png",
    techsNamesToShowTag: ["Angular", "TypeScript", "REST APIs", "Chart.js"],
    allTechs: [
      "JavaScript",
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "REST APIs",
      "Chart.js",
      "Flexbox",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "PM2",
      "WinSCP",
      "NPM",
      "Node.js",
    ],
  },

  {
    name: "Portfolio page",
    nameFull: "Portfolio page",
    appType: "Web",
    year: 2021,
    tech: "Angular",
    description: "Personal portfolio page gathering basic professional informations with also some built-in small applications.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "portfolio.jvictor.com.br",
    url: "https://portfolio.jvictor.com.br",
    githubRepoURL: "https://github.com/jvictorjs/portfolio",
    youtubeDemoURL: "",
    imgFileName: "project-portfolio.png",
    techsNamesToShowTag: ["Angular", "TypeScript", "REST APIs", "Socket.io", "Express.js"],
    allTechs: [
      "JavaScript",
      "HTML",
      "CSS",
      "Angular",
      "TypeScript",
      "REST APIs",
      "Socket.io",
      "Express.js",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "PM2",
      "WinSCP",
      "NPM",
      "Node.js",
      "Google Apps Script",
      "Triggers",
      "Telegram Bot API",
      "REST APIs",
      "JavaScript",
      "Web Apps",
      "Fontawesome",
      "Audio",
    ],
  },
  {
    name: "TremdGol Backend (Soccer Stats API)",
    nameFull: "TremdGol Backend (Soccer Stats API)",
    appType: "REST API",
    year: 2020,
    tech: "Node.js",
    description: "REST API that provides soccer matches statistics to others applications.",
    language: "English",
    languageSymbol: "EN",
    urlLabel: "api.tremdgol.com",
    url: "https://api.tremdgol.com",
    githubRepoURL: "https://github.com/jvictorjs/tremdgol-backend",
    youtubeDemoURL: "",
    imgFileName: "project-tremdgol-backend2.png",
    techsNamesToShowTag: ["JSON Server", "Ubuntu Linux", "Digital Ocean", "NGINX", "Certbot SSL", "HTTP methods", "REST APIs"],
    allTechs: [
      "JavaScript",
      "JSON Server",
      "Google Apps Script",
      "Triggers",
      "Web Apps",
      "Telegram Bot API",
      "REST APIs",
      "HTTP methods",
      "PuTTy",
      "Ubuntu Linux",
      "NGINX",
      "Digital Ocean",
      "Git",
      "GitHub",
      "Certbot SSL",
      "Vim",
      "PM2",
      "WinSCP",
      "NPM",
      "Node.js",
    ],
  },
  {
    name: "Firesafe (hackathon prototype)",
    nameFull: "Firesafe (hackathon prototype)",
    appType: "Mobile",
    year: 2020,
    tech: "React Native",
    description: "Hackathon project for 2020 Nasa Space Apps Challenge - Location: Recife (2nd place award)",
    language: "Portuguese",
    languageSymbol: "PT",
    urlLabel: "",
    url: "",
    githubRepoURL: "https://github.com/jvictorjs/nasa_space_apps_2020",
    youtubeDemoURL: "",
    imgFileName: "project-firesafe.jpg",
    techsNamesToShowTag: ["React", "React Native", "Expo"],
    allTechs: ["React", "React Native", "REST APIs", "Expo", "Axios", "Android Studio", "JavaScript", "HTML", "CSS", "Flexbox", "Git", "GitHub"],
  },
  {
    name: "Medicine Reminder",
    nameFull: "Medicine Reminder",
    appType: "Telegram Bot",
    year: 2019,
    tech: "Google Apps Script",
    description: "A useful chatbot that reminds you when it is time to take that pill. This is one of the many Telegram Bots I created.",
    language: "Brazilian Portuguese",
    languageSymbol: "PT",
    urlLabel: "",
    url: "",
    githubRepoURL: "https://github.com/jvictorjs/medicine-reminder-telegram-chatbot",
    youtubeDemoURL: "https://www.youtube.com/shorts/KbZ9CUsmLcI",
    imgFileName: "project-medicine-reminder.jpg",
    techsNamesToShowTag: ["Google Apps Script", "Triggers", "Web Apps", "Telegram Bot API", "JavaScript"],
    allTechs: ["Google Apps Script", "Triggers", "Telegram Bot API", "REST APIs", "JavaScript", "Web Apps"],
  },
];

const TECHS = [
  {
    name: "HTML",
    classType: 1,
    expYears: 5,
    skillLevel: 2,
    top: "15%",
    left: "67%",
    relatedContent: [{ a: "HTML MDN Web DOCs", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" }],
    projectsAvailable: [],
  },
  {
    name: "Material Design Icons",
    classType: 4,
    expYears: 1,
    skillLevel: 2,
    top: "27%",
    left: "78%",
  },
  {
    name: "Phosphor Icons",
    classType: 5,
    expYears: 0,
    skillLevel: 2,
    top: "33%",
    left: "75%",
  },
  {
    name: "Fontawesome",
    classType: 5,
    expYears: 1,
    skillLevel: 2,
    top: "36%",
    left: "84%",
  },
  { classType: 5, expYears: 0, skillLevel: 2, top: "8%", left: "77%", name: "Canvas" },
  { classType: 5, expYears: 1, skillLevel: 2, top: "16%", left: "81%", name: "Audio" },
  { classType: 5, expYears: 1, skillLevel: 2, top: "10%", left: "86%", name: "Markdown" },

  { classType: 2, expYears: 5, skillLevel: 2, top: "62%", left: "34%", name: "REST APIs" },
  { classType: 4, expYears: 2, skillLevel: 1, top: "75%", left: "35%", name: "Twitter API" },
  {
    classType: 3,
    expYears: 5,
    skillLevel: 3,
    top: "69%",
    left: "33%",
    name: "Telegram Bot API",
  },
  { classType: 4, expYears: 2, skillLevel: 1, top: "56%", left: "35%", name: "JSON Server" },
  { classType: 5, expYears: 5, skillLevel: 2, top: "64%", left: "24%", name: "HTTP methods" },

  { classType: 3, expYears: 5, skillLevel: 2, top: "9%", left: "2%", name: "Google Sheets" },
  {
    classType: 2,
    expYears: 5,
    skillLevel: 3,
    top: "16%",
    left: "8%",
    name: "Google Apps Script",
  },
  { classType: 5, expYears: 5, skillLevel: 3, top: "23%", left: "23%", name: "Triggers" },
  { classType: 5, expYears: 5, skillLevel: 3, top: "11%", left: "17%", name: "Automation" },
  { classType: 5, expYears: 5, skillLevel: 3, top: "4%", left: "11%", name: "Custom Menus" },
  { classType: 5, expYears: 5, skillLevel: 2, top: "11%", left: "29%", name: "Web Apps" },

  {
    name: "JavaScript",
    classType: 1,
    expYears: 5,
    skillLevel: 2,
    top: "35%",
    left: "18%",
    relatedContent: [{ a: "JavaScript MDN Web DOCs", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }],
    projectsAvailable: [],
  },
  {
    name: "DOM Manipulation",
    classType: 5,
    expYears: 1,
    skillLevel: 2,
    top: "42%",
    left: "38%",
  },
  { classType: 5, expYears: 1, skillLevel: 2, top: "28%", left: "30%", name: "Events" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "46%", left: "22%", name: "Promises" },
  { classType: 3, expYears: 2, skillLevel: 2, top: "46%", left: "9%", name: "Node.js" },
  { classType: 4, expYears: 2, skillLevel: 2, top: "55%", left: "18%", name: "Express.js" },
  { classType: 3, expYears: 2, skillLevel: 2, top: "32%", left: "8%", name: "Chart.js" },
  { classType: 3, expYears: 1, skillLevel: 1, top: "25%", left: "37%", name: "TypeScript" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "48%", left: "30%", name: "Axios" },

  { classType: 4, expYears: 1, skillLevel: 1, top: "30%", left: "56%", name: "Angular" },

  { classType: 3, expYears: 2, skillLevel: 1, top: "9%", left: "43%", name: "React Native" },
  {
    classType: 5,
    expYears: 1,
    skillLevel: 1,
    top: "4%",
    left: "52%",
    name: "React Native SVG Charts",
  },
  { classType: 2, expYears: 2, skillLevel: 1, top: "14%", left: "52%", name: "React" },
  { classType: 5, expYears: 2, skillLevel: 1, top: "6%", left: "39%", name: "Expo" },
  {
    classType: 5,
    expYears: 1,
    skillLevel: 1,
    top: "4%",
    left: "43%",
    name: "Android Studio",
  },
  {
    name: "Vite",
    expYears: 0,
    classType: 5,
    top: "34%",
    left: "45%",
    projectsAvailable: [],
  },

  { classType: 2, expYears: 1, skillLevel: 2, top: "43%", left: "57%", name: "Vue" },
  { classType: 3, expYears: 1, skillLevel: 2, top: "49%", left: "62%", name: "Vuetify" },
  { classType: 5, expYears: 1, skillLevel: 1, top: "43%", left: "52%", name: "Vuex" },
  { classType: 5, expYears: 1, skillLevel: 2, top: "50%", left: "51%", name: "Vue router" },

  {
    name: "CSS",
    classType: 1,
    expYears: 5,
    skillLevel: 2,
    top: "55%",
    left: "77%",
    relatedContent: [{ a: "HTML MDN Web DOCs", href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" }],
    projectsAvailable: [],
  },
  { classType: 4, expYears: 0, skillLevel: 1, top: "46%", left: "83%", name: "Tailwind CSS" },
  { classType: 5, expYears: 0, skillLevel: 1, top: "65%", left: "86%", name: "SASS" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "44%", left: "75%", name: "Flexbox" },
  { classType: 4, expYears: 2, skillLevel: 2, top: "66%", left: "73%", name: "Transitions" },
  { classType: 5, expYears: 0, skillLevel: 2, top: "59%", left: "69%", name: "Variables" },

  {
    name: "GraphQL",
    classType: 4,
    expYears: 0,
    skillLevel: 1,
    top: "79%",
    left: "50%",
    relatedContent: [],
    projectsAvailable: [],
  },
  {
    name: "Apollo Client",
    classType: 5,
    expYears: 0,
    skillLevel: 1,
    top: "75%",
    left: "52%",
    relatedContent: [],
    projectsAvailable: [],
  },
  {
    name: "codegen",
    classType: 5,
    expYears: 0,
    skillLevel: 1,
    top: "84%",
    left: "48%",
    relatedContent: [],
    projectsAvailable: [],
  },

  {
    name: "Pentaho Data Integration",
    classType: 3,
    expYears: 5,
    skillLevel: 3,
    top: "91%",
    left: "62%",
    description: `<i><a href="https://help.hitachivantara.com/Documentation/Pentaho/9.0/Setup/Pentaho_Data_Integration_(PDI)_tutorial" target="_blank"><strong class="blue--text">Pentaho Data Integration (PDI)</strong></a> provides the Extract, Transform, and Load (ETL) capabilities that facilitate the process of capturing, cleansing, and storing data.</i>`,
    relatedContent: [
      { a: "Pentaho Docs", href: "https://help.hitachivantara.com/Documentation/Pentaho/9.0/Setup/Pentaho_Data_Integration_(PDI)_tutorial" },
    ],
    projectsAvailable: [],
  },
  { classType: 5, expYears: 3, skillLevel: 1, top: "86%", left: "88%", name: "Power BI" },
  { classType: 5, expYears: 3, skillLevel: 1, top: "91%", left: "90%", name: "Qlik Sense" },
  { classType: 2, expYears: 5, skillLevel: 2, top: "83%", left: "63%", name: "SQL" },
  { classType: 5, expYears: 2, skillLevel: 1, top: "84%", left: "80%", name: "SQLite" },
  { classType: 5, expYears: 1, skillLevel: 2, top: "84%", left: "71%", name: "SQL Server" },
  { classType: 5, expYears: 5, skillLevel: 2, top: "78%", left: "67%", name: "PostgreSQL" },
  { classType: 5, expYears: 1, skillLevel: 2, top: "90%", left: "56%", name: "DBeaver" },

  { classType: 3, expYears: 2, skillLevel: 2, top: "87%", left: "37%", name: "Git" },
  { classType: 4, expYears: 2, skillLevel: 2, top: "91%", left: "40%", name: "GitHub" },

  { classType: 5, expYears: 1, skillLevel: 1, top: "64%", left: "13%", name: "Socket.io" },

  { classType: 5, expYears: 2, skillLevel: 1, top: "53%", left: "8%", name: "NPM" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "73%", left: "18%", name: "NGINX" },
  { classType: 3, expYears: 5, skillLevel: 2, top: "78%", left: "6%", name: "Ubuntu Linux" },
  { classType: 5, expYears: 5, skillLevel: 2, top: "79%", left: "2%", name: "Vim" },
  { classType: 5, expYears: 5, skillLevel: 2, top: "71%", left: "9%", name: "PuTTy" },
  { classType: 4, expYears: 1, skillLevel: 2, top: "91%", left: "24%", name: "Netlify" },
  { classType: 3, expYears: 2, skillLevel: 2, top: "86%", left: "10%", name: "Digital Ocean" },
  { classType: 5, expYears: 2, skillLevel: 1, top: "86%", left: "3%", name: "WinSCP" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "80%", left: "20%", name: "Certbot SSL" },
  { classType: 5, expYears: 2, skillLevel: 2, top: "72%", left: "3%", name: "PM2" },
];
