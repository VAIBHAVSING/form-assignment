
# Dynamic Forms Web Application

This project is a web application that demonstrates dynamic forms based on user interaction using the **SERN stack** (SQL, Express, React, Node.js). The application allows users to submit form data and sync it with an online Excel sheet.

## Features

- Dynamic forms (Form A & Form B) with validation.
- PostgreSQL for storing form data.
- External data synchronization.
- Client-side validation with **Zod**.
- Server-side validation and error handling.
- Responsive UI for mobile and desktop views.

## Tech Stack

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: React
- **Database**: PostgreSQL
- **Validation**: Zod

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (>= 16.x)
- PostgreSQL (>= 13.x)
- Git

## Project Setup

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/dynamic-forms-app.git
cd dynamic-forms-app
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies for both backend and frontend:

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. PostgreSQL Setup

#### Install PostgreSQL

If you don't have PostgreSQL installed, you can download and install it from [here](https://www.postgresql.org/download/). Follow the setup instructions for your operating system.

Once PostgreSQL is installed, start the PostgreSQL service.

#### Create a Database

After installing PostgreSQL, create a database for the application. You can do this via the `psql` command line or a GUI like pgAdmin.

Example commands:

```bash
# Login to PostgreSQL
psql -U postgres

# Create the database
CREATE DATABASE dynamic_forms_db;

# Exit the PostgreSQL CLI
\q
```

### 4. Environment Variables

Create a `.env` file in the `backend` directory to store environment variables:

```bash
# .env file

DATABASE_URL=postgres://username:password@localhost:5432/dynamic_forms_db
PORT=3001
```

- Replace `username` and `password` with your PostgreSQL credentials.
- Replace `dynamic_forms_db` with the name of the database you created.

### 5. Run Database Migrations and Seed Data

Before starting the server, run the following command to seed the database with the required tables and initial data:

```bash
# In the backend directory
npm run seed
```

This will create the necessary `forms` table in PostgreSQL and populate it with some initial data.

### 6. Run the Application

Now that everything is set up, you can start the backend and frontend servers.

#### Start the Backend

To start the Node.js server:

```bash
cd backend
npm run dev
```

#### Start the Frontend

To start the React frontend server:

```bash
cd ../frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`, and the backend will run on `http://localhost:3001`.

### 7. Sync Data with Excel (Optional)

There is a **"Refresh"** button on the frontend interface to manually synchronize the form data in the database with an external Excel sheet.

## Seeding Data

To seed the database with initial values (like country codes, etc.), you can run the following command at any time:

```bash
npm run seed
```

This will populate the `forms` table in the database with initial records.

## Folder Structure

```
dynamic-forms-app/
├── backend/              # Backend Node.js + Express code
│   ├── src/
│   │   ├── controllers/  # Controllers to handle requests
│   │   ├── models/       # Models for database
│   │   ├── routes/       # API routes
│   │   ├── config.ts     # Database connection configuration
│   ├── package.json      # Backend dependencies
├── frontend/             # Frontend React app
│   ├── src/              # React components and hooks
│   ├── package.json      # Frontend dependencies
├── .env                  # Environment variables for backend
├── README.md             # This file
```

## Deployment

If you want to deploy this project, make sure you configure the environment variables accordingly and use a cloud database service like **Heroku Postgres** or **AWS RDS** for PostgreSQL.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, feel free to reach out at `your-email@example.com`.
