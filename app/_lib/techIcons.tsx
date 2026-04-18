import type { IconType } from "react-icons";
import {
  SiPython, SiTypescript, SiJavascript, SiPhp,
  SiCplusplus, SiDotnet,
  SiReact, SiVuedotjs, SiDjango, SiLaravel, SiNextdotjs, SiPlotly,
  SiPostgresql, SiMongodb,
  SiDocker, SiGit, SiMoodle, SiOpentelemetry,
} from "react-icons/si";
import {
  FaDatabase, FaCode, FaTerminal, FaProjectDiagram,
} from "react-icons/fa";

export const techIcons: Record<string, IconType> = {
  // Languages
  Python:     SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PHP:        SiPhp,
  "C++":      SiCplusplus,
  "C#":       SiDotnet,
  Cypher:     FaProjectDiagram,
  SQL:        FaDatabase,

  // Frameworks
  React:        SiReact,
  "Vue.js":     SiVuedotjs,
  Django:       SiDjango,
  Laravel:      SiLaravel,
  "Next.js":    SiNextdotjs,
  "Plotly/Dash": SiPlotly,
  Plotly:       SiPlotly,

  // Databases
  PostgreSQL: SiPostgresql,
  MongoDB:    SiMongodb,
  Neo4j:      FaProjectDiagram,

  // Tools
  Docker:         SiDocker,
  Git:            SiGit,
  "Moodle LMS":   SiMoodle,
  Moodle:         SiMoodle,
  OpenTelemetry:  SiOpentelemetry,
  PowerShell:     FaTerminal,

  // Concepts (generic)
  "REST APIs":          FaCode,
  "Graph Databases":    FaProjectDiagram,
  "Data Visualization": SiPlotly,
  "Real-time Monitoring": SiOpentelemetry,
  "LMS Development":    SiMoodle,
  "Agile/SCRUM":        FaCode,
};
