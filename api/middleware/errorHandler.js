// Express knows this is an error handler because it takes four arguments.
// If you write a function with 4 parameters, Express automatically treats it as a special Error-Handling Middleware.
export function errorHandler(err, req, res, next) {
    //sets the HTTP response status code header. the || is for when there is no custom state code attached, it defaults to 500
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        error: err.message || "Internal Server Error"
    });
}

    //errorHandler: Catches any sudden crashes, bugs, or explicit errors thrown anywhere in the code (500)