# 🚀 Me-API Playground (Backend Assessment - Track A)

> A production-ready RESTful API that serves my professional profile, projects, and skills using a strict **Controller-Service-Repository** architecture.

![NodeJS](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## 📋 Table of Contents
- [About the Project](#-about-the-project)
- [Architecture Design](#-architecture-design)
- [Tech Stack](#-tech-stack)
- [Database Schema](#-database-schema)
- [API Documentation](#-api-documentation)
- [Getting Started](#-getting-started)
- [Project Demo](#-project-demo)

---

## 💡 About the Project

This project is a submission for the **ProcessVenue Backend Assessment (Track A)**. 
Instead of building a monolithic script, I designed this system as a **Scalable Microservice**. It treats my resume data as relational entities, allowing for complex queries like "Find all projects using React".

**Key Features:**
* **Layered Architecture:** Strict separation of concerns (Controller vs Service vs Repository).
* **Type Safety:** Built entirely with TypeScript for compile-time error checking.
* **Validation:** Uses `Zod` middleware to validate incoming request queries.
* **Search & Filtering:** Case-insensitive search implemented for projects.
* **Automated Seeding:** TypeScript script to populate the database with resume data.
* **Security:** Implemented `Helmet` for security headers and CORS policies.

---

## 🏗 Architecture Design

I followed the **Controller-Service-Repository (CSR)** pattern to ensure modularity and testability.



[Image of layered software architecture diagram]


1.  **Controller Layer (`src/api/controllers`):** Handles HTTP requests, validation (Zod), and sends responses.
2.  **Service Layer (`src/business/services`):** Contains business logic.
3.  **Repository Layer (`src/data/repositories`):** Directly interacts with the Database using Prisma ORM.

**Folder Structure:**
/Users/shardul/InternshipProject/project-3/
├── .env
├── .gitignore
├── client/
│   ├── index.html
│   └── style.css
├── package-lock.json
├── package.json
├── prisma/
│   ├── migrations/
│   │   ├── 20260206083156_init/
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   │   ├── profile.controller.ts
│   │   │   └── project.controller.ts
│   │   ├── middlewares/
│   │   └── routes/
│   │       ├── profile.routes.ts
│   │       └── project.routes.ts
│   ├── app.ts
│   ├── business/
│   │   ├── errors/
│   │   └── services/
│   │       ├── profile.service.ts
│   │       └── project.service.ts
│   ├── config/
│   ├── data/
│   │   └── repositories/
│   │       ├── profile.repo.ts
│   │       └── project.repo.ts
│   ├── server.ts
│   └── utils/
└── tsconfig.json

🛠 Tech Stack
Runtime: Node.js

Framework: Express.js

Language: TypeScript

Database: PostgreSQL

ORM: Prisma

Validation: Zod

Frontend: Vanilla JS + Tailwind CSS (Lightweight Client)

🗄 Database Schema
The database is normalized to handle one-to-many relationships effectively.

Profile: Root entity (Me).

Projects: Linked to Profile (1:N). Contains techStack as a String Array.

Skills: Categorized skills (Frontend, Backend, DevOps).

Education & Experience: Chronological data.

View the full schema in prisma/schema.prisma

📡 API Documentation
Base URL: /api/v1
Method         Endpoint            Description                                                 Query Params
GET            /profile            Fetches full profile (Bio, Skills, Experience)              None
GET            /projects           Fetches all projects                                        ?skill=React (Optional) 
GET            /health             Server Health Check                                         None

Sample cURL Request:

Bash
curl -X GET "http://localhost:3001/api/v1/projects?skill=React"
🚀 Getting Started
Follow these steps to run the project locally.

Prerequisites
Node.js (v18+)

PostgreSQL (Local or Docker)

Installation
Clone the repository

Bash
git clone [https://github.com/Sharduljoshi2001/project-3.git](https://github.com/Sharduljoshi2001/project-3.git)
cd project-3
Install Dependencies

Bash
npm install
Environment Setup Create a .env file in the root directory:

Code snippet
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/ME-API-DB?schema=public"
PORT=3001
Database Migration & Seeding

Bash
# Create tables
npx prisma migrate dev --name init

# Seed data (Resume)
npm run seed
Run the Server

Bash
npm run dev
Run the Frontend Open client/index.html in your browser or serve it:

Bash
cd client
npx serve .
🎥 Project Demo & Links
Live Demo Video: https://drive.google.com/drive/folders/1MgjQT6F3DZdufeBHEQzA6mXGrzKAirJC?usp=sharing

My Resume: https://drive.google.com/drive/folders/1YPS9HHz07CWtB0Eiw1WqZi0fSGhhWPm1?usp=sharing

Portfolio: https://joshishardulportfolio.netlify.app/

Author: Shardul Joshi