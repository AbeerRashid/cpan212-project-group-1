import express from 'express';
import { notFound } from "../api/middleware/notFound";
import { errorHandler } from "../api/middleware/errorHandler";

export const app = express();

// app.use method adds middleware functions to the application's request-response processing pipeline
// Order matters: Express runs middleware and routes top to bottom.

app.use(express.json());



// These two stay last: notFound catches anything no route matched,
// errorHandler catches anything thrown along the way.

// 3. 404 Not Found Middleware (Must go AFTER all valid routes)
app.use(notFound)
// 4. Global Error Handler (Must be the very last middleware)
app.use(errorHandler)
