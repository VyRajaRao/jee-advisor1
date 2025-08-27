# Overview

This is a comprehensive JEE (Joint Entrance Examination) cutoff data platform designed for engineering admission aspirants in India. The application provides tools for exploring historical cutoff data from 2016-2024, analyzing trends, comparing colleges, and predicting admission chances based on rank and category. The platform aims to help students make informed decisions about their college choices through data-driven insights and visualizations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a modern React single-page application using:
- **React 18** with TypeScript for type safety and better developer experience
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and caching
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **Radix UI components** via shadcn/ui for accessible, customizable UI primitives
- **Recharts** for interactive data visualizations and charts

The application follows a component-based architecture with:
- Pages for major routes (Home, Explorer, Trends, Compare, Predictor)
- Reusable UI components organized by functionality
- Custom hooks for common logic like mobile detection and toast notifications
- TypeScript interfaces for type safety across the application

## Backend Architecture
The backend is an Express.js REST API with:
- **Node.js** with TypeScript and ESM modules
- **Express.js** for HTTP server and middleware
- **In-memory storage** implementation with sample data for development
- RESTful API endpoints for cutoff data, trends analysis, and predictions
- Middleware for request logging and error handling
- Development-only Vite integration for serving the frontend

The server architecture includes:
- Route handlers organized in separate files
- Storage abstraction layer with interface-based design
- Comprehensive sample data generation for realistic testing
- Request/response logging for development debugging

## Data Architecture
The application uses a flexible data storage approach:
- **Drizzle ORM** with PostgreSQL schema definitions for production
- **In-memory storage** for development with comprehensive sample data
- Schema validation using Zod for type-safe API contracts
- Structured data models for cutoff records, filters, and predictions

Key data entities include:
- Cutoff records with institute, branch, category, and rank information
- Filter parameters for querying and pagination
- Prediction models for college admission chances
- Trend analysis data for visualization

## UI/UX Design System
The application implements a modern, data-rich interface with:
- **Dark theme by default** with academic blue and neon accent colors
- **Responsive design** that works across desktop and mobile devices
- **Interactive visualizations** using Recharts for trends and comparisons
- **Micro-animations** and smooth transitions for better user experience
- **Modern typography** using Inter font for readability
- **Gradient borders and neon effects** for an aspirational, tech-forward aesthetic

The design emphasizes:
- Clear data presentation through tables, charts, and cards
- Intuitive navigation with breadcrumbs and sticky headers
- Accessible components with proper ARIA labels and keyboard navigation
- Consistent spacing and visual hierarchy throughout the application

# External Dependencies

## Database and ORM
- **Drizzle ORM** - Type-safe database operations with PostgreSQL dialect
- **@neondatabase/serverless** - Serverless PostgreSQL database connection
- **Drizzle Kit** - Database migrations and schema management

## Frontend Libraries
- **React ecosystem**: React 18, React DOM for the core framework
- **Routing**: Wouter for lightweight client-side routing
- **State management**: TanStack React Query for server state caching
- **UI components**: Extensive Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Charts**: Recharts for interactive data visualizations
- **Forms**: React Hook Form with Hookform Resolvers for validation
- **Utilities**: clsx, tailwind-merge for conditional styling

## Build and Development Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - Fast bundling for production builds
- **PostCSS** - CSS processing pipeline

## Backend Dependencies
- **Express.js** - Web application framework
- **Session management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation
- **Utilities**: date-fns for date manipulation, nanoid for ID generation

## Development and Replit Integration
- **Replit-specific plugins**: Runtime error overlay, cartographer for development
- **TSX** - TypeScript execution for development server
- **Development banner** integration for Replit environment

The application is designed to work seamlessly in both development (with in-memory data) and production (with PostgreSQL) environments, providing flexibility for different deployment scenarios.