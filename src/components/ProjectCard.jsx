import { Card, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ title, description }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
  </Card>
);

export default ProjectCard;
