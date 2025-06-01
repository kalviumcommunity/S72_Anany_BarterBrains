import express from 'express';
import skillRoutes from './routes/skillRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/skills', skillRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
