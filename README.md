# 🚀 VyomGarud Internship Final Round - Blogging Website (Strapi CMS)

## 🌟 Project Overview
This project is a full-stack blogging platform developed as the final technical assessment for the VyomGarud internship.
It utilizes a Headless CMS (Strapi) for content management and a modern framework (React/Next.js) for the public frontend.

**Task Chosen:** Option A - Blogging Website (Strapi CMS)
**Core Features (To Be Implemented):**
* CRUD operations via Strapi Admin (Create, Read, Update, Delete posts).
* Image upload and rich content management.
* Categorization and tagging of posts.
* Public-facing blog display.

## 🏛️ Initial Architecture Diagram
![Simple Architecture Diagram for Strapi/React Blog]
(./architecture.png)

## 🔧 Running Instructions

This project requires two separate terminal windows (PowerShell/Git Bash) to run the backend API and the frontend client simultaneously.

### Prerequisites
* Node.js (LTS version) and npm installed.
* Git installed (for cloning).

### Step 1: Clone and Install Dependencies
1.  Clone this repository to your local machine:
    ```bash
    git clone [YOUR_GITHUB_REPO_URL]
    cd VyomGarud_Strapi_Blog
    ```
2.  Install Backend Dependencies (API and CMS):
    ```bash
    cd backend
    npm install
    ```
3.  Install Frontend Dependencies (React Client):
    ```bash
    cd ..
    cd frontend
    npm install
    ```

### Step 2: Start the Servers

**Terminal Window 1 (Backend - Strapi)**
1.  Navigate to the backend folder:
    ```bash
    cd C:\...\backend
    ```
2.  Start the API and CMS (runs on **http://localhost:1337**):
    ```bash
    npm run develop
    ```

**Terminal Window 2 (Frontend - React/Vite)**
1.  Navigate to the frontend folder:
    ```bash
    cd C:\...\frontend
    ```
2.  Start the client application (runs on **http://localhost:5173**):
    ```bash
    npm run dev
    ```

### Access Points
* **Live Blog:** http://localhost:5173/
* **Admin CMS:** http://localhost:1337/admin (Use the credentials you created.)

## 🛠️ Tech Stack (TBD)
Strapi, Node.js, SQLite, React, Vite, Axios, React Router

## 🏛️ Final Architecture Diagram
(The image must be placed in the same folder as this README)
![Final Architectural Diagram of Strapi/React Blog]
(./architecture_diagram.png)
