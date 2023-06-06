import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    clique,
    shopify,
    Cliquelive,
    sharp,
    spinview,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Clique Infotech",
        icon: clique,
        iconBg: "#383E56",
        date: "Dec 2019 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Clique Infotech",
        icon: clique,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Clique Infotech",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - March 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but SARAVANA proved me wrong.",
        name: "Avano Morgan",
        designation: "Management",
        company: "CLIQUE IN",
        image: "https://cliquelive.com/wp-content/plugins/clever-fox/inc/axtria/images/team/img02.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like SARAVANA does.",
        name: "Russel Martin",
        designation: "UI/UX",
        company: "SPINVIEW",
        image: "https://spinview.io/wp-content/uploads/2023/05/Russ.jpeg",
    },
    {
        testimonial:
            "After SARAVANA optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Staci Dickerson",
        designation: "CFO",
        company: "SHARP GHC",
        image: "https://www.sharp.com/about/leadership/images/Staci_Dickerson-small.jpg",
    },
];

const projects = [
    {
        name: "Clique Live",
        description:
            "Clique infotech is the IT services and solutions to offer serge sofware Technologies executed various engagements for assorted customers by utilizing their kin. process and technology to sling our customers to accomplish their business potential.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Typescript",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: Cliquelive,
        source_code_link: "https://github.com/kjsk",
    },
    {
        name: "SPIN VIEW",
        description:
            "Spinview brings businesses the power of visual intelligence using our AI-driven platform. With the latest in digital twin technology, we capture and transform all the data about a space into meaningful, actionable, measurable information.",
        tags: [
            {
                name: "Gatsby",
                color: "blue-text-gradient",
            },
            {
                name: "Material-UI",
                color: "green-text-gradient",
            },
            {
                name: "Formik",
                color: "pink-text-gradient",
            },
        ],
        image: spinview,
        source_code_link: "https://github.com/kjsk",
    },
    {
        name: "Global Health",
        description:
            "Sharp Medical is an health care application used to develop an interactive web portal for surgens and care team members. They created and modify surgeries, can add patients and can assign surgery under a patient. This is an interactive app to manage patient surgerys.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "Material-UI",
                color: "pink-text-gradient",
            },
        ],
        image: sharp,
        source_code_link: "https://github.com/kjsk",
    },
];

export { services, technologies, experiences, testimonials, projects };