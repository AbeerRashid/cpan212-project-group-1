import { dailyLogs } from "../data/mockData";

// GET /api/logs - Retrieve all daily logs
export function getAllLogs(req, res, next) {
    try { //In the future, this will be DailyLog.find() from MongoDB
        res.status(200).json({
            success: true,
            count: dailyLogs.length,
            data: dailyLogs
        });
    } catch (err) { // passes to notFound
        next(err); //passes to errorHandler
    }
}

// GET /api/logs/:id - Retrieve a single daily log by ID
export function getLogById (req, res, next) {
    try { //In the future, this will be DailyLog.find() from MongoDB
        const { id } = req.params;
        const log = dailyLogs.find(l => l._id === id);

        if (!log) {
            const error = new Error(`Daily log with ID ${id} not found`);
            error.status = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            data: log
        });
    } catch (err) {
        next(err); // Automatically caught by our error handler
    }
}


//https://www.youtube.com/watch?v=UuhnalzKwE0&t=14s

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes