const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 24, 2025",
    title: "چرا امروزه به فریمورک‌های فرانت‌اند مثل React نیاز داریم؟",
    image: "/images/blog1.png",
    link: "https://www.linkedin.com/posts/ilia-ahadi_%DA%86%D8%B1%D8%A7-%D8%A7%D9%85%D8%B1%D9%88%D8%B2%D9%87-%D8%A8%D9%87-%D9%81%D8%B1%DB%8C%D9%85%D9%88%D8%B1%DA%A9%D9%87%D8%A7%DB%8C-%D9%81%D8%B1%D8%A7%D9%86%D8%AA%D8%A7%D9%86%D8%AF-%D9%85%D8%AB%D9%84-react-activity-7398658922200604672-McT5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADWavpsBIXuYCwEH55tsnqgJdnRv1gTPNhE",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["CSS", "Tailwind CSS", "ShadCN"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma ORM"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "CMS",
    items: ["WordPress"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/IliaAhd",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ilia-ahadi",
  },
  {
    id: 3,
    text: "Gmail",
    icon: "/icons/gmail.svg",
    bg: "#4bcb63",
    link: "mailto:iliya.ahadi@gmail.com",
  },
  {
    id: 4,
    text: "Telegram",
    icon: "/icons/telegram.svg",
    bg: "#ff866b",
    link: "https://www.t.me/iliaahd",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpg",
  },
  {
    id: 2,
    img: "/images/gal2.jpg",
  },
  {
    id: 3,
    img: "/images/gal3.jpg",
  },
  {
    id: 4,
    img: "/images/gal4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "98 Weblog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "98 Weblog Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "🖥️ 98 Weblog, is a personal blogging platform designed with a nostalgic Windows 98 aesthetic. The goal was to create a clean, lightweight environment that blends a retro visual style with a modern development structure. The interface is intentionally minimal, and all post and account management features are presented in a simple and distraction-free layout.",
          ],
        },
        {
          id: 2,
          name: "98-weblog.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://98-weblog.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "98weblog.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "GitHub.com/98-weblog",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IliaAhd/98-weblog",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    // {
    //   id: 6,
    //   name: "Notes",
    //   icon: "/images/folder.png",
    //   kind: "folder",
    //   position: "top-52 right-80",
    //   windowPosition: "top-[20vh] left-7",
    //   children: [
    //     {
    //       id: 1,
    //       name: "Notes Project.txt",
    //       icon: "/images/txt.png",
    //       kind: "file",
    //       fileType: "txt",
    //       position: "top-5 right-10",
    //       description: [
    //         "📝 Notes is a modern note-taking web application designed to simplify the process of creating, managing, and organizing notes. The goal is to provide users with a fast, secure, and enjoyable experience, allowing them to store and manage their personal notes without worry.",
    //         "The carefully designed user interface makes interacting with the app smooth and visually appealing, providing easy access to notes. With a secure authentication system, users can be confident that their information remains private and safe.",
    //       ],
    //     },
    //     {
    //       id: 2,
    //       name: "Soon",
    //       icon: "/images/safari.png",
    //       kind: "file",
    //       fileType: "url",
    //       href: "",
    //       position: "top-20 left-20",
    //     },
    //     {
    //       id: 4,
    //       name: "Notes.png",
    //       icon: "/images/image.png",
    //       kind: "file",
    //       fileType: "img",
    //       position: "top-52 left-80",
    //       imageUrl: "/images/project-2.png",
    //     },
    //     {
    //       id: 5,
    //       name: "GitHub.com/notes",
    //       icon: "/images/github.png",
    //       kind: "file",
    //       fileType: "fig",
    //       href: "https://github.com/IliaAhd/notes",
    //       position: "top-60 left-5",
    //     },
    //   ],
    // },

    // ▶ Project 3
    {
      id: 7,
      name: "Voice Recorder App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Voice Recorder.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The voice‑recorder project is a simple yet functional voice recording application. Built with React, it features a clean and modern UI styled using Tailwind CSS.",
            "Key features include:",
            "Recording audio from the device’s microphone",
            "Real-time waveform visualization during recording",
            "Playback of the recorded audio",
          ],
        },
        {
          id: 2,
          name: "voice-recorder.pages.dev",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://voice-recorder-2bh.pages.dev",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Voice Recorder.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Github.com/voice-recorder",
          icon: "/images/github.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/IliaAhd/voice-recorder",
          position: "top-50 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ilia.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ilia-2.jpg",
    },
    {
      id: 3,
      name: "me-hoodie.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/ilia-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/ilia.jpg",
      description: [
        "Hey! I’m Ilia 👋 — a web developer who loves creating clean, modern, and interactive websites that actually feel great to use.",
        "My main tools are JavaScript, React, and Next.js, and I’m all about building fast, smooth experiences with a touch of personality.",
        "I care a lot about polished UI, thoughtful UX, and writing code that future-me won’t hate digging through.",
        "When I’m not coding, I’m probably adjusting a layout way too late at night, drinking overpriced coffee, or convincing myself that a new gadget is totally essential😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
