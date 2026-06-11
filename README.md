# NoteNest Web App
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/notenestapp/notenest-webapp.git)

NoteNest is your 24/7 AI study companion on a mission to help you truly understand your course material. Upload notes, get instant explanations, and ace your exams with personalized learning. This repository contains the source code for the NoteNest landing page and web application.

## ✨ Features

-   **Past Questions Hub:** Upload and access a growing library of past exam questions to practice smarter with real questions from your courses.
-   **Handwritten Notes Scanner:** Transform photos of handwritten notes into clear, explained digital content.
-   **Instant AI Chat Tutor:** Get 24/7 assistance to answer questions, break down complex topics, and guide your learning journey.
-   **Waitlist & Contact Forms:** Seamlessly integrated forms for user sign-ups and inquiries, powered by EmailJS.
-   **Responsive Design:** A fully responsive and interactive user experience built with Tailwind CSS and Framer Motion.

## 🛠️ Tech Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Email Service:** [EmailJS](https://www.emailjs.com/)
-   **Linting:** [ESLint](https://eslint.org/)
-   **Testing:** [Vitest](https://vitest.dev/)

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/) or another package manager like yarn or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/notenestapp/notenest-webapp.git
    cd notenest-webapp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following EmailJS credentials. You can get these from your [EmailJS account dashboard](https://dashboard.emailjs.com/).

    ```env
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_WAITLIST_TEMPLATE_ID=your_waitlist_template_id
    VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run preview`: Previews the production build locally.
-   `npm run test`: Runs tests using Vitest.
-   `npm run test:watch`: Runs tests in watch mode.

## 📁 Project Structure

The project follows a standard Vite + React application structure. Key directories inside `src/` include:

```
src/
├── assets/         # Static assets like images, fonts, and videos
├── components/     # Reusable React components
│   ├── ui/         # UI components from shadcn/ui
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and library initializations (EmailJS, GSAP)
├── pages/          # Top-level page components for routing
├── App.tsx         # Main application component with router setup
└── main.tsx        # Application entry point
