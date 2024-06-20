export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "BLOW - Video Conferencing App",
    des: "Simplify your video conferencing experience with BLOW. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    linkname: "Blow app",
    link: "https://zoom-to-blow.vercel.app/",
  },
  {
    id: 2,
    title: "Sunsum - AI Article Extract Anywhere",
    des: "Extract the website link summary in seconds",
    img: "/Article-summary.png",
    className: "w-[464px] height-[319.73px] skew-y-2 rotate-10 mb-10",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/tail.svg",
      "/javascript.svg",
      "ai.svg",
    ],
    link: "https://article-extract-anywhere.netlify.app/",
  },
  {
    id: 3,
    title: "Next js Blog",
    des: "create modrn Blog with Admin Page using next js",
    img: "/next-14-app.svg",
    iconLists: ["/next.svg", "/re.svg", "/javascript.svg", "/mongodb.svg"],
    link: "https://next14-blog-mu.vercel.app/",
  },
  {
    id: 4,
    title: "ChatNat-Chat App",
    des: "With private messaging, you can be yourself, chat freely and feel close to the most important people in your life no matter where they are.",
    img: "/ChatNat.png",
    className: "w-[464px] height-[319.73px] skew-y-2 rotate-10 mb-10",
    iconLists: [
      "/re.svg",
      "/framer-motion.svg",
      "/mongodb.svg",
      "/socket-io.svg",
    ],
    link: "https://chatnat.onrender.com",
  },
  {
    id: 4,
    title: "Brainwave",
    des: "Modern UI design better than AI",
    img: "/Brainwave.png",
    className: "w-[464px] height-[700px] skew-y-2 rotate-10 mb-10",
    iconLists: ["/re.svg", "/tail.svg", "/javascript.svg"],
    link: "https://brainwaves-app.netlify.app/",
  },
  {
    id: 4,
    title: "3D-shirt",
    des: " Custom your T-Shirt. Including the style of Men and Women! Add photos, text and more to create your own stunning custom T-Shirt ",
    img: "/3d-shirt.png",
    className: "w-[464px] height-[700px] skew-y-2 rotate-10 mb-10",
    iconLists: ["/framer-motion.svg", "/tail.svg", "/three.svg", "re.svg"],
    link: "https://3d-shirtdesign.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "They pay attention to every detail and were very accommodating with our web site. They went above and beyond to make sure that the site was exactly what I had envisioned.",
    name: "Jonathan Cuesta",
  },
  {
    quote:
      "They pay attention to every detail and were very accommodating with our web site. They went above and beyond to make sure that the site was exactly what I had envisioned.",
    name: "Jonathan Cuesta",
  },
  {
    quote:
      "They pay attention to every detail and were very accommodating with our web site. They went above and beyond to make sure that the site was exactly what I had envisioned.",
    name: "Jonathan Cuesta",
  },
  {
    quote:
      "They pay attention to every detail and were very accommodating with our web site. They went above and beyond to make sure that the site was exactly what I had envisioned.",
    name: "Jonathan Cuesta",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "software engineer",
    desc: "software engineer with 2 years of expeience, ultimately delivering innovative and impactful solutions that drive business growth and user satisfaction.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance web developer",
    desc: "This role allows me to leverage my expertise in front-end and back-end development, crafting responsive and user-friendly websites that resonate with target audiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Learner",
    desc: "Keeping skills updated ensures professionals can tackle new challenges confidently and contribute meaningfully to their teams and organizations in an ever-changing digital world.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Rashmivarshi",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "",
  },
];
