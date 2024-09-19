
---

# restApi-ManageStudentCourseGrade

This is a REST API project for managing student courses and grades. It is built using Node.js with Express and MySQL for database management.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [Running the Project](#running-the-project)
- [Testing the API](#testing-the-api)
- [Project Structure](#project-structure)

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12+)
- [MySQL](https://www.mysql.com/) (for database)
- [Git](https://git-scm.com/) (for cloning the repository)
- [VSCode](https://code.visualstudio.com/) (for editing and testing the code)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdisetiakawan/restApi-ManageStudentCourseGrade.git
   ```

2. Navigate to the project directory:

   ```bash
   cd restApi-ManageStudentCourseGrade
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Database Configuration

1. Create a new MySQL database.

2. Configure the database connection by copying `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

3. Open `.env` and fill in your MySQL database details. Here's an example:

   ```bash
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASS=your_db_pass
   DB_NAME=your_db_name
   DB_PORT=3306
   PORT=3000
   ACCESS_TOKEN_SECRET=your_secret_key
   ```

4. Once your database and environment variables are set up, migrate the necessary tables to your database.

   You can use Sequelize or any migration tool you are comfortable with, depending on how the models are set up in your project.

## Running the Project

After setting up the database and environment variables, you can start the project by running the following command in the terminal:

```bash
npm start
```

This will start the server, and you can access the API via `http://localhost:3000` (or the port you defined in your `.env`).

## Testing the API

To test the API, follow these steps:

1. Install the **REST Client** extension in Visual Studio Code:

   - Open Visual Studio Code.
   - Go to the Extensions tab (or press `Ctrl+Shift+X`).
   - Search for **REST Client**.
   - Install it.

2. Open the `testing/auth.http` file from the project directory in VSCode.

3. You will find several API requests in the `.http` file. Click on the "Send Request" button that appears above each request to test the API.

**Note:** Ensure your server is running before sending requests.

## Project Structure

Here's a quick overview of the project structure:

```
.
├── controllers/       # Contains controller logic
├── middleware/        # Middleware for authentication and authorization
├── models/            # Sequelize models representing the database tables
├── routes/            # Route handlers for different endpoints
├── testing/           # Contains auth.http for testing the API endpoints
├── .env.example       # Example of environment variables file
├── app.js             # Entry point of the application
├── package.json       # NPM package configuration
└── README.md          # Project documentation
```

---

With these steps, you should be able to set up, run, and test the API for managing student courses and grades. If you encounter any issues, please ensure that your MySQL database is correctly configured and that the necessary migrations are applied.
