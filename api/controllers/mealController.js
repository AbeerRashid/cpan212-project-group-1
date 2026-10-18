import { dailyLogs } from "../data/mockData.js";

// POST /api/logs/:logId/meals - Add a meal entry to a specific daily log
export function addMealToLog(req, res){
    const {logId} = req.params;
    const {name, calories, protein, carbs, fact} = req.body;

    // 1. Find the target daily log
    const log = dailyLogs.find(l => l.id === logID);

    if (!log) {
        return res.status(404).json({
            success: false,
            message: `Daily log with ID ${logId} not found`
        });
    }

    if (!name || calories === undefined){
        return res.status(400).json({
            success: fakse,
            message: 'Validation Error: Meal name and calories are required.'
        });
    }

        // 3. Create the new meal object
        const newMeal = {
        _id: String(Date.now()),
        name,
        calories,
        protein: protein || 0,
        carbs: carbs || 0,
        fat: fat || 0
    };

    // 4. Push to the log's meals array and update total calories automatically
    log.meals.push(newMeal);
    log.totalCalories += Number(calories);

    res.status(201).json({
        success: true,
        data: {
            meal: newMeal,
            updatedLog: log
        }
    });
}