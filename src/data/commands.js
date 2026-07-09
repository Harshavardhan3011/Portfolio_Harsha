import { socialLinks } from "./socialLinks";

export const commands = [
  { id: "nav_home", name: "Navigate: Home", category: "Navigation", action: "route", value: "/" },
  { id: "nav_about", name: "Navigate: About", category: "Navigation", action: "route", value: "/about" },
  { id: "nav_skills", name: "Navigate: Skills", category: "Navigation", action: "route", value: "/skills" },
  { id: "nav_projects", name: "Navigate: Projects", category: "Navigation", action: "route", value: "/projects" },
  { id: "nav_gaming", name: "Navigate: Gaming Arena", category: "Navigation", action: "route", value: "/gaming" },
  { id: "nav_resume", name: "Navigate: Resume", category: "Navigation", action: "route", value: "/resume" },
  { id: "nav_contact", name: "Navigate: Contact", category: "Navigation", action: "route", value: "/contact" },
  { id: "download_cv", name: "Action: Download Resume", category: "Utilities", action: "download", value: "/harsha_vardhan_resume.pdf" },
  { id: "social_github", name: "Social: GitHub Profile", category: "Links", action: "url", value: socialLinks.github },
  { id: "social_linkedin", name: "Social: LinkedIn Connection", category: "Links", action: "url", value: socialLinks.linkedin }
];
