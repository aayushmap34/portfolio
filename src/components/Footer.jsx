import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ textAlign: 'center', py: 3, mt: 4, bgcolor: '#f1f1f1' }}>
    <Typography variant="body2">
      © 2025 Aayushma Pradhan — 
      <Link href="https://github.com/aayushmap34" target="_blank" rel="noopener" sx={{ mx: 1 }}>GitHub</Link>
      <Link href="https://www.linkedin.com/in/aayushma-pradhan-609266203/" target="_blank" rel="noopener">LinkedIn</Link>
    </Typography>
  </Box>
);

export default Footer;
