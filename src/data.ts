// src/data.ts
import nc from "@/assets/nc.jpeg";
import ml from "@/assets/ml.jpeg";
import mm from "@/assets/mm.jpeg";
import jm from "@/assets/jm.jpeg";
import frontpage from "@/assets/frontpage.jpg";

export const landingPageData = {
  bannerImage: frontpage,
  clubHistory: {
    title: "Club history placeholder test",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur.`,
      
  },
  successes: {
    title: "Recent Successes",
    list: [
      "2024 UWaterloo Black and Gold Invitational Champions",
      "2025 UWestern Invitational Finalists",
      ".......",
    ],
  },
};
export const teamData = [
  {
    name: "Natalija Crvenkovski",
    firstName: "Natalija",
    lastName: "Crvenkovsk",
    role: "President",
    blurb: "Natalija Crvenkovski is the President of the University of Windsor's Undergraduate Mock Trial Association for the 2024-2025 and 2025-2026 academic years. She is a fourth-year honours philosophy student who enjoys studying the intersections of law and philosophy, with a particular interest in AI ethics and governance. Through her role as President, she is committed to building a team culture grounded in intellectual curiosity, collaboration, and a passion for justice.",
    image: nc, 
  },
  {
    name: "Matthew Livingstone",
    firstName: "Matthew",
    lastName: "Livingstone",
    role: "Vice-President",
    blurb: "Matthew Livingstone is a second-year undergraduate student with aspirations of earning a law degree to pursue a career in public policy. He has held his position with us as Vice-President for the past year, and competes nationally in moot/mock trials. In addition to his work with UMTA, Matthew is a member of the university’s debate team, where he has competed in intercollegiate tournaments for the past eight months. He previously completed a co-op placement at the Crown Attorney’s Office, and he now serves as the Head of Compliance & Special Situations at the John Simpson Odette Student Investment Fund.",
    image: ml, 
  },
  {
    name: "Madeline Mccallum",
    firstName: "Madeline",
    lastName: "Mccallum",
    role: "Vice-President",
    blurb: "Madeline McCallum is a third-year Political Science student at the University of Windsor. She serves as Vice President of the University of Windsor Mock Trial Association and has competed in multiple tournaments, contributing to case strategy and team preparation. She is also a former member of the University of Windsor varsity basketball team. Madeline currently works as a legal assistant and aspires to become a lawyer advocating for effective crime control on behalf of Canada.",
    image: mm, 
  },
  {
    name: "Joseph Murtagh ",
    firstName: "Joseph",
    lastName: "Murtagh",
    role: "Vice-President of Finance and Operations ",
    blurb: "Joseph Murtagh is an undergraduate student at the University of Windsor, pursuing a combined Bachelor of Commerce and Computer Science degree. He is actively involved in the university's mock trial program and was part of the team that secured first place at the 2025 Black & Gold Invitational Mock Trial Tournament hosted by the University of Waterloo. Joseph also serves as a member of the John Simpson Odette Student Investment Fund, contributing to the fund's operations and investment strategies. He aspires to persue a legal degree and work in legislation. ",
    image: jm, 
  },
];

export const eventData = [
  {
    title: "Criminal Law Moot: Case TBA",
    description:
      "June 28th, 2025",
  },
  {
    title: "Criminal Mock trial: Case TBA ",
    description:
      "TBS",
  },
  {
    title: "Corporate law Moot: Case TBA",
    description:
      "TBS",
  },
];
