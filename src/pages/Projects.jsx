import { Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "CavNotes",
    description: "Led requirements gathering and transformed insights from 40+ stakeholders into actionable user stories. Streamlined feature documentation and team collaboration via GitHub Issues."
  },
  {
    title: "Course Review Application",
    description: "Built a JavaFX-based course review app with full CRUD support and real-time search across 100+ reviews. Reduced task time by 30% through a 5-scene interactive UI."
  },
  {
    title: "My Travel Buddy",
    description: "Developed a responsive Travel Assistant web app with itinerary and hotel booking features. Used AI to streamline trip planning and tested frontend across devices."
  },
  {
    title: "Python Gamebox",
    description: "Designed a maze-navigation game using Pygame with pathfinding, sprite animations, and 20+ unique effects to deliver an immersive gameplay experience."
  }
];

const Projects = () => (
  <Box>
    <Typography variant="h5" gutterBottom>My Projects</Typography>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </Box>
);

export default Projects;
