# MediCare Hospital Website

This project is a responsive, mobile-first hospital website built with:
- **Vite** (Build Tool)
- **TypeScript** (Typed Logic)
- **Tailwind CSS** (Styling)
- **HTML5** (Structure)

## Project Structure

- `index.html`: Home page
- `about.html`: About Us page
- `services.html`: Medical Services listing
- `doctors.html`: Find a Doctor directory
- `contact.html`: Contact information and form
- `appointment.html`: Appointment Booking form with client-side validation
- `src/`: Source code
  - `components/`: Reusable logic components (Header, Footer, Cards) that return HTML strings
  - `data/`: Mock data for doctors and services
  - `logic/`: Business logic (e.g., form handling)
  - `main.ts`: Entry point for all pages (injects layout, handles interactions)
  - `style.css`: Tailwind directives and custom styles

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

## Features

- **Responsive Design**: Mobile-first layout using Tailwind CSS.
- **Modular Components**: Header and Footer are injected via TypeScript, reducing code duplication.
- **Dynamic Content**: Doctors and Services are rendered from a data source (`src/data/mockData.ts`).
- **Form Validation**: Appointment form includes client-side validation.
- **Clean Code**: TypeScript ensures type safety and modularity.
