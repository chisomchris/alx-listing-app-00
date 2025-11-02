
# ALX Listing App

## Project Overview

The **ALX Listing App** is a simplified clone of the popular Airbnb platform, focusing on creating a **property listing page** that displays available accommodations.

The goal of this project is to learn **modern web development practices** using **Next.js** with **Tailwind CSS**, explore **component-based architecture**, and understand how to structure scalable front-end applications.

## Project Goals

- Build a responsive and interactive listing interface.
- Implement reusable UI components for scalability.
- Understand how Next.js handles routing, components, and assets.
- Practice organizing a project into logical modules and directories.

---

## Project Structure

See below the folder structure for the project

```
alx-listing-app/
│
├── components/        # Reusable UI components such as Button, Footer, Card, Navbar, etc.
│
├── interfaces/        # TypeScript interfaces for defining data types and props
│
├── constants/         # Static values, configuration settings, and mock data used throughout the project
│
├── public/assets/     # Images, icons, and other public-facing assets
│
├── pages/             # Next.js pages for routing (Home, Listings, etc.)
│
├── styles/            # Global and module-specific CSS or Tailwind files
│
└── README.md          # Project documentation
```

### **Project Structure Summary**

| Directory | Purpose |
| ------ | ------- |
| `components/` | Contains all reusable visual elements (Navbar, Footer, Buttons, Property Cards, etc.) |
| `interfaces/` | Defines TypeScript models for structured data (e.g., property listings, user data) |
| `constants/` | Stores global constants, color schemes, API URLs, and static data |
| `public/assets/` | Holds images, icons, and static files accessible by the browser, arranged by asset type |

---

## Running the Project Locally

Follow these steps to set up and run the **ALX Listing App** on your local machine:

### **1. Clone the Repository**

```bash
git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app
```

### **2. Install Dependencies**

Make sure you have **Node.js** and **npm** (or **yarn**) installed, then run:

```bash
npm install
```

### **3. Start the Development Server**

```bash
npm run dev
```

### **4. Open the App in Your Browser**

Visit:

```
http://localhost:3000
```

You should see the **Next.js app running** without errors.

---

## Tech Stack

- **Next.js** – React-based framework for server-side rendering and routing
- **TypeScript** – Type safety and better development experience
- **Tailwind CSS** – Utility-first styling for modern UI design
- **ESLint + Prettier** – Code formatting and linting standards
