export type ProjectCategory =
  | "personal-portfolio"
  | "internship"
  | "fyp"
  | "university";

export type Project = {
  title: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  status: "placeholder" | "complete";
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, string> = {
  "personal-portfolio": "Personal Projects",
  internship: "Internship Projects",
  fyp: "Final Year Project",
  university: "University Coursework",
};

export const categoryEnabled: Record<ProjectCategory, boolean> = {
  "personal-portfolio": false,
  internship: true,
  fyp: true,
  university: false,
};

export const projects: Project[] = [
  {
    title: "Future Personal Project A",
    category: "personal-portfolio",
    summary:
      "Reserved for Anthony's future personal project after it is genuinely completed and documented.",
    stack: ["Coming later"],
    status: "placeholder",
    featured: true,
  },
  {
    title: "Future Personal Project B",
    category: "personal-portfolio",
    summary:
      "A second personal project slot is ready because this category may contain more than one project.",
    stack: ["Coming later"],
    status: "placeholder",
  },
  {
    title: "World Monitor Dashboard",
    category: "internship",
    summary:
      "A Malaysia-focused monitoring dashboard redesigned from a crowded single-page interface into dedicated Overview, Weather and Intel experiences, combining map-based context, environmental information and intelligence content through public data sources.",
    stack: [
      "Svelte",
      "Vite",
      "MapLibre GL JS",
      "Node.js",
      "Public APIs",
    ],
    status: "complete",
  },
  {
    title: "MYAgriTopia",
    category: "fyp",
    summary:
      "A smart agriculture application that combines weather information, soil insights and rule-based decision support to help farmers plan crops, monitor field conditions, assess pest and disease risks, and manage agricultural activities.",
    stack: [
      "Flutter",
      "Firebase Firestore",
      "Firebase Authentication",
      "OpenWeather API",
      "Decision Support System",
    ],
    status: "complete",
    featured: true,
  },
  {
    title: "University Project A",
    category: "university",
    summary:
      "The first selected university project will be inserted here after reviewing Anthony's retained project evidence.",
    stack: ["[Actual stack]"],
    status: "placeholder",
    featured: true,
  },
  {
    title: "University Project B",
    category: "university",
    summary:
      "A second university project slot is included because this category may contain more than one project.",
    stack: ["[Actual stack]"],
    status: "placeholder",
  },
];
