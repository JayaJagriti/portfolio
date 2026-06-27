export type SectionKey = "overview" | "education" | "experience" | "skills" | "projects";

export const sections: Array<{
  key: SectionKey;
  title: string;
  subtitle: string;
}> = [
  { key: "overview", title: "Overview", subtitle: "Profile, highlights, quick jump" },
  { key: "education", title: "Education", subtitle: "University + school scores" },
  { key: "experience", title: "Experience", subtitle: "Research internship at IIT Patna" },
  { key: "skills", title: "Skills", subtitle: "Stack, tools, strengths" },
  { key: "projects", title: "Projects", subtitle: "MedGenie, ML DeFi Agent" }
];