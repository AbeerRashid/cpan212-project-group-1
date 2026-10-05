# Calorie Goal Tracker

## 1. Problem and Users
Our app is intended for people who want a simple way to monitor daily calorie intake against a personal calorie target without manually calculating calories for every meal. The user sets a daily calorie goal and records the food they consume across three meal categories: breakfast, lunch, and dinner. The app uses nutrition data from an external API and quantity/unit conversion to calculate consumed calories, then clearly indicates whether the user is under or over their target.

The MVP is designed around quick, structured meal entry rather than a full diet-planning or medical nutrition system. The main problem is reducing the manual work involved in converting food quantities into comparable calorie totals while keeping the user’s own meal records available in the app.

## 2. Features
- A user can set a daily calorie target for a selected day.
- A user can create a meal entry for breakfast, lunch, or dinner with a food name, quantity, and unit.
- A user can use the app’s nutrition lookup feature to retrieve calorie information for a food from the external API.
- A user can see the app convert the entered quantity/unit into a calorie amount using the nutrition data returned through the Express API.
- A user can view the total calories consumed for a daily log and compare the total with the day’s calorie target.
- A signed-in user can view the details of a saved daily log and its meal entries.
- A signed-in user can edit or delete their own daily logs and meal entries.

### Later Features
- Reminders or push notifications for missing meals.
- Weekly/monthly charts and long-term progress analytics.
- A function that suggests recipes based on food items in the user's diet. Or recipes that involve new healthy food items not in the user's current diet.
- Workout plans API
- Progress tracker
- Social media aspect. Can add friends and compare progress and meal plans, recipes etc.

## 4. Data Model Draft

The app uses three resources: `User`, `DailyLog`, and `MealEntry`.

### User
| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | string | Yes | Unique user identifier |
| `email` | string | Yes | User's unique email address |
| `passwordHash` | string | Yes | Hashed password; never returned to the client |
| `createdAt` | Date | Yes | Date and time the account was created |
| `updatedAt` | Date | Yes | Date and time the account was last updated |

### DailyLog
A daily log represents one user's calorie target and meals for one calendar date.

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | string | Yes | Unique daily log identifier |
| `userId` | string | Yes | ID of the user who owns the log |
| `date` | string | Yes | Calendar date in `YYYY-MM-DD` format |
| `targetCalories` | number | Yes | User's calorie goal for the day |
| `createdAt` | Date | Yes | Date and time the log was created |
| `updatedAt` | Date | Yes | Date and time the log was last updated |

The daily total is calculated from the meal entries rather than entered manually.

The API response also includes these derived fields:
| Field | Type | Required | Description |
|---|---|---|---|
| `totalCaloriesConsumed` | number | Yes | Sum of the calculated calories from the day's meal entries |
| `goalStatus` | string | Yes | Indicates whether the total is below, at, or above the calorie target |

### MealEntry
A meal entry represents one food item recorded for a meal in a daily log.

| Field | Type | Required | Description |
|---|---|---|---|
| `_id` | string | Yes | Unique meal entry identifier |
| `dailyLogId` | string | Yes | ID of the daily log this meal belongs to |
| `userId` | string | Yes | ID of the user who owns the meal entry |
| `category` | string | Yes | `breakfast`, `lunch`, or `dinner` |
| `foodName` | string | Yes | Food name returned by the USDA API |
| `fdcId` | number | Yes | USDA FoodData Central food identifier |
| `servings` | number | Yes | Number of servings consumed |
| `servingSize` | number | Yes | Serving size returned by the USDA API |
| `servingSizeUnit` | string | Yes | Unit for the serving size, such as `g` |
| `caloriesPerServing` | number | Yes | Calories in one serving according to the USDA data |
| `calculatedCalories` | number | Yes | Total calories for this meal entry |
| `createdAt` | Date | Yes | Date and time the meal entry was created |
| `updatedAt` | Date | Yes | Date and time the meal entry was last updated |

`calculatedCalories` is calculated by the server using:
`calculatedCalories` = `servings` × `caloriesPerServing`

## 7. Roles
| Area | Lead | What the lead coordinates |
| --- | --- | --- |
| API / Express | Abeer | M1 endpoint design; later routes, controllers, validation, external API integration. |
| Frontend / Next.js | Owen | M1 page flow/wireframes; later pages, forms, shared state and API integration. |
| Database / MongoDB | Kuan | M1 data model; later Mongoose models, relationships, filtering/sorting/paging and seed. |
| Repo / PRs / workflow | Kuan | Repo structure, README/CONTRIBUTIONS coordination, PR hygiene and milestone tags/submission readiness. |