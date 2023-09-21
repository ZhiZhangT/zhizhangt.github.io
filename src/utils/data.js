import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const educationTimeline = [
  {
    name: "Singapore University of Technology and Design",
    qual:"BE (Hons) in Computer Science",
    time: "2020 - 2025",
    icon: "sutdlogo.png",
    iconalt: "SUTD logo",
    bg: "#286F6C",
  },
  {
    name: "Zhejiang University, School of Management",
    qual:"MS (Hons) in Technology Entreprenuership",
    time: "Sep 2023 - Jan 2024",
    icon: "zhejianglogo.png",
    iconalt: "Zhejiang logo",
    bg: "#F26440",
  },
  {
    name: "University of California Berkeley, Extension",
    qual:"MS (Hons) in Technology Entreprenuership",
    time: "Jan 2023 - May 2023",
    icon: "ucblogo.png",
    iconalt: "UCB logo",
    bg: "#EEC048",
  },
  {
    name: "Hwa Chong Institution",
    qual:"GCE A' Levels",
    time: "2016 - 2017",
    icon: "hwachonglogo.png",
    iconalt: "HCI logo",
    bg: "#F26440",
  }
];

export const AboutMyEducation = [
  "I am a scholar under the SUTD Technology Entrepreneurship Programme (STEP), a 5-year program that is giving me opportunities to study in the West- USA and East- China, while pursuing a Bachelor's and Master's degrees concurrently. I am also the inaugural recipient of the Shopee-SUTD Scholarship."
  ,
  "My research interests revolve around realizing the potentials of AI and Big Data in the real world. I am currently writing a thesis paper on how a data marketplace can be created where consumers can control and monetize access to their personal data, using a federated machine learning architecture.",
  "I'm currently looking for an internship opportunity in the Summer of 2024, as a Software Engineer or Product Mananger in the Tech space.",
];

export const workExp = [
  {
    place: "Zing Data, California",
    image: "zing.jpg",
    tenure: "May 2023 - Aug 2023",
    role: "Product Growth Intern",
    detail:
      "Built product analytics catalog and workflows on Amplitude to gain insights on user retention and behavior, wrote whitepaper and other content to increase publicity. Growth hacking through establishing partnerships with data and AI consultancies, podcast shows; Email, Reddit and LinkedIn outreach to potential high-intent users."
  },
  {
    place: "Grab, Singapore",
    image: "grab.jpg",
    tenure: "Aug 2022 - Dec 2022",
    role: "Technical Program Management Intern",
    detail:
      "Spearheaded process improvements such as automating ticket labeling in JIRA, led post-mortem and retrospective discussions that created clearer goals for the next half. Defined timelines and milestones for Analytics and Data Engineering teams which led to better accountability and visibility of their work across leadership and the organization."
  },
  {
    place: "Shopee, Singapore",
    image: "shopee.JPG",
    tenure: "Jun 2021 - Sep 2021",
    role: "Product Management Intern",
    detail:
      "Wrote product requirement documents, planned development timelines with a team of developers, designers, and operators, and initiated a new-joinee onboarding guide. Launched Shopee Antecipa, a service that advances payments to e-commerce sellers in Brazil and Shopee’s first financial service in Latin America, which achieved > USD1M in revenue, along with features that improved user experience and added functionality."
  },
  {
    place: "Kopi Date, Singapore",
    image: "kopidate.png",
    tenure: "Jan 2021 - May 2021",
    role: "Software Engineering Intern",
    detail:
      "Created the backend referral system in Typescript using Google Firestore, integrated it with the existing new user flow, built accompanying frontend Angular.js components. Initiated and completed other growth features on the web-app."      
  },
  {
    place: "Protege Ventures, Singapore",
    image: "protege.JPG",
    tenure: "Oct 2020 - Jul 2022",
    role: "Investment Principal",
    detail:
      "Oversaw investment team in a student-run venture fund and ensured a healthy dealflow for the fund, and conducted rigorous due-diligence for prospective startups. Met with founders and professional VCs from the Southeast-Asian region, gaining a robust understanding of the VC ecosystem."      
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
