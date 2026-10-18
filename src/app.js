import express from 'express';
import { notFound } from "../api/middleware/notFound";
import { errorHandler } from "../api/middleware/errorHandler";
import logRoutes from '../api/routes/logRoutes.js';
import mealRoutes from '../api/routes/mealRoutes.js'

export const app = express();

// app.use method adds middleware functions to the application's request-response processing pipeline
// Order matters: Express runs middleware and routes top to bottom.

app.use(express.json());

//the importing file can name the imported variable whatever it wants
app.use('/api/logs', logRoutes);
app.use('/api/logs', mealRoutes);

// These two stay last: notFound catches anything no route matched,
// errorHandler catches anything thrown along the way.

// 3. 404 Not Found Middleware (Must go AFTER all valid routes)
app.use(notFound)
// 4. Global Error Handler (Must be the very last middleware)
app.use(errorHandler)
