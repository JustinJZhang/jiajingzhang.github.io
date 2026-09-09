// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-paper-accepted-at-ieee-transactions-on-medical-imaging",
          title: 'Paper accepted at IEEE Transactions on Medical Imaging',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7.html";
            },},{id: "news-paper-accepted-at-2024-computer-vision-and-pattern-recognition-conference-cvpr",
          title: 'Paper accepted at 2024 Computer Vision and Pattern Recognition Conference (CVPR)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5.html";
            },},{id: "news-paper-accepted-at-ieee-transactions-on-medical-robotics-and-bionics",
          title: 'Paper accepted at IEEE Transactions on Medical Robotics and Bionics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6.html";
            },},{id: "news-oral-presented-at-2024-ieee-ultrasonics-ferroelectrics-and-frequency-control-joint-symposium-ius",
          title: 'Oral presented at 2024 IEEE Ultrasonics, Ferroelectrics, and Frequency Control Joint Symposium (IUS)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8.html";
            },},{id: "news-oral-presented-at-2025-ieee-international-symposium-on-biomedical-imaging-isbi",
          title: 'Oral presented at 2025 IEEE International Symposium on Biomedical Imaging (ISBI)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4.html";
            },},{id: "news-2-oral-and-1-poster-presented-at-2025-ieee-international-ultrasonics-symposium-ius",
          title: '2 Oral and 1 poster presented at 2025 IEEE International Ultrasonics Symposium (IUS)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9.html";
            },},{id: "news-paper-accepted-at-ieee-journal-of-biomedical-and-health-informatics",
          title: 'Paper accepted at IEEE Journal of Biomedical and Health Informatics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3.html";
            },},{id: "news-paper-accepted-at-ieee-transactions-on-ultrasonics",
          title: 'Paper accepted at IEEE Transactions on Ultrasonics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-paper-accepted-at-npj-artificial-intelligence",
          title: 'Paper accepted at npj Artificial Intelligence',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1.html";
            },},{id: "news-paper-accepted-at-2026-international-conference-on-learning-representations-iclr",
          title: 'Paper accepted at 2026 International Conference on Learning Representations (ICLR)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12.html";
            },},{id: "news-poster-presented-at-2026-medical-imaging-ai-summit-hku",
          title: 'Poster presented at 2026 Medical Imaging AI Summit HKU',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10.html";
            },},{id: "news-i-will-attend-the-2026-ieee-ius-on-october-4-in-north-carolina",
          title: 'I will attend the 2026 IEEE IUS on October 4 in North Carolina...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6A%69%6E%67%7A@%63%6F%6E%6E%65%63%74.%68%6B%75.%68%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=eAh9ne8AAAAJ", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/85269302942", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
