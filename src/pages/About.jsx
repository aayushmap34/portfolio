import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const skills = [
  'Python, Java, JavaScript, HTML/CSS, C++, C, SQL, R',
  'Git/GitHub, JUnit, LaTeX, Agile, Scrum, Trello, Figma',
  'Microsoft Office Suite, Google Suite, Canva, Heroku, AWS',
  'Languages: Nepali, French, Latin'
];

const About = () => (
  <Box>
    <Typography variant="h5" gutterBottom>About Me</Typography>
    <Typography variant="body1" paragraph>
      I'm Aayushma Pradhan, a Computer Science major and Business minor at the University of Virginia, graduating in May 2026. 
      I have a GPA of 3.86 and have completed coursework in Software Engineering, AI, Programming, and Data Structures.
    </Typography>

    <Typography variant="body1" paragraph>
      I've held internship roles in software development, marketing, and education. At the Terma Project, I automated data auditing with Python scripts and redesigned a website using Figma to improve UX. I also contributed to a digital marketing strategy that boosted brand visibility by 25%.
    </Typography>

    <Typography variant="body1" paragraph>
      My passion for user-centered technology is reflected in my projects, including a JavaFX course review app, a responsive AI-powered travel assistant, and a Pygame-based game. I’ve led cross-functional teams, conducted user research, and delivered polished products through iterative development.
    </Typography>

    <Typography variant="h6" gutterBottom>Technical Skills</Typography>
    <List dense>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <ListItemText primary={skill} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default About;
