# Email Service Client

This is a simple React frontend that allows users to send emails using a serverless backend (AWS Lambda). The frontend consumes an API built to handle failover between different email service providers (like Amazon SES, SendGrid, etc.).

## Features

- Send emails by providing "To", "Subject", and "Message".
- Error handling for failed email sends.
- Simple and responsive UI built with React and TypeScript.
- Consumes a serverless API deployed on AWS.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: AWS Lambda (API Gateway, Node.js)
- **Deployment**: AWS (API Gateway & Lambda)

## Prerequisites

Make sure you have the following installed:

- Node.js (v16+)
- npm or yarn
- A deployed backend (AWS API Gateway + Lambda)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/josmel/EmailServiceClient.git
cd EmailServiceClient
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

### 3. Environment Variables

Create a `.env` file in the root of the project with the following content:

```
VITE_API_URL_SEND_MESSAGE=https://your-api-endpoint.com/dev/email/send
```

This `VITE_API_URL_SEND_MESSAGE` is your backend API Gateway URL to send emails. Replace it with your deployed API endpoint.

### 4. Run the Development Server

To start the development server, run:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

### 5. Build for Production

To build the project for production, run:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

The production build will be in the `dist/` folder.

## Project Structure

- `src/components/`: Contains reusable components such as `EmailForm`, `Button`, and input fields.
- `src/main.tsx`: Entry point for the React application.
- `src/App.tsx`: Main app component.
- `src/App.css`: Styles for the application.
- `.env`: Environment variables for API URLs.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint on the project.

## Frontend Deployment (Optional)

You can deploy the frontend to services like Vercel, Netlify, or AWS S3. In my case is in versel

## Backend Setup

The backend consists of AWS Lambda functions and API Gateway. Ensure your API is deployed and accessible with the correct CORS settings.

### Frontend URL:

[https://emailserviceclient.netlify.app](https://emailserviceclient.netlify.app)
