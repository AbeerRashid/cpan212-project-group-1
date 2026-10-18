
export function validateLog(req, res, next) {
    const { date, totalCalories } = req.body;

    //check if the required fields are missing
    if (!date || totalCalories === undefined) {
        return res.status(400).json({
            success: false,
            message: 'Validation Error: Both "date" and "totalCalories" are required fields.'
        });
    }
// If everything looks good, pass control to the controller!
    next();
}