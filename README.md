# Todo Backend Setup

## Prerequisites
- Node.js (v18+)
- MySQL Database
- Prisma CLI

## Installation
1. Clone the repository
2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
Create a \`.env\` file with:
\`\`\`
DATABASE_URL="mysql://username:password@localhost:3306/todo_db"
\`\`\`

4. Initialize database
\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

5. Start the server
\`\`\`bash
npm run dev
\`\`\`

## API Endpoints
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
