# Blogging App Frontend Documentation

Welcome to the Blogging App frontend project! This project is built using Next.js 13, React 18, TypeScript, Tailwind CSS, react-hook-form, and Zod validation. This documentation will guide you through the setup and development process.

## Deployed on Vercel

https://blogging-app-one.vercel.app/

## Prerequisites

1. Node.js and npm installed.
2. Basic knowledge of Next.js, React, TypeScript, Tailwind, react-hook-form, and Zod validation.

## Getting Started

1. Clone the repository to your local machine:
   `git clone <repository-url>`

2. Navigate to the project directory and install dependencies:
   cd blogging-app-frontend

`npm install`

3. Run the development server:
   `npm run dev`

## File Structure

```
src/
│
├── app/
│   ├── public/
│   │   ├── home/
│   │   │   └── page.tsx
│   │
│   └── protected/
│       ├── my-articles/
│       │   └── page.tsx
│
├── components/  # Reusable UI components
│
├── containers/  # Complex components often connected to a store or displaying a list of components
│
└── types/       # TypeScript type definitions
.
.
.
```

## Quality Tools

- ESLint: For catching and fixing JavaScript/TypeScript issues.
- Prettier: For consistent code formatting.

### Running Quality Tools

- Linting:
  `npm run lint`

- Formatting with Prettier:
  `npm run format`

## Connected to openapi backend server with axios and custom hooks

```bash
  const fetchPost = async (formData) => {
    try {
      const response = await axios.post(url, formData, {
        method: "POST",
        headers: {
          "Content-Type": contentType,
          "X-API-KEY": apiKey,
          Authorization: token,
        },
      });

      setResponse(response);
      return response.data;
    } catch (error) {
      setError(error as AxiosError);
      return null;
    } finally {
        ...
    }
}
```

## Making Changes

This project is built with a server-side first approach in mind, but client-side rendering is used almost everywhere. It's structured to allow easy transformation to server-side rendering if required.

## Testing User

For testing purposes, you can use the following credentials:

Username: novak
Password: novak123

## Future Implementations

Tests: Automated testing is currently missing and will be added in the future.
Comments Logic: The comments functionality is under development.

## Thank you for using or contributing to Blogging App Frontend!
