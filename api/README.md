API Backend - Milestone 2

## Setup Instructions
1. Run `npm install` inside the `api/` folder.
2. Create a `.env` file based on `.env.example` and add your USDA API key. (use the following: cp .env.example .env)
3. Run `npm run dev` to start the server on port 4000.

## Endpoints & Testing (curl commands)

### Get All Meals
```bash
curl http://localhost:4000/api/meals