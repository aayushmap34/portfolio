import { Typography, Box, Avatar } from '@mui/material';

const Home = () => (
  <Box textAlign="center">
    <Avatar src="/profile.jpg" sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
    <Typography variant="h4">Welcome to My Portfolio</Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      I'm ## Aayushma Pradhan!

I am a versatile, detail-oriented, and innovative software developer with a background in computer science and business, combining front-end development, backend systems, and data-driven problem-solving to build efficient, scalable, and user-friendly applications. My work focuses on clean, maintainable code, system optimization, and user-centric development, with experience in UI/UX design, database management, and automation to enhance digital platforms.
    </Typography>
  </Box>
);

export default Home;
