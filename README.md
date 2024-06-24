
# Netflix Project Frontend 

This project aims to replicate the Netflix user interface, allowing users to browse and watch content in a similar fashion to the real platform. The frontend is built using React.js with Vite for a fast development environment, TailwindCSS and DaisyUI for styling, and Redux for state management. This README provides an overview of the project, setup instructions, and key details.
## Demo

![Profile manage gif](https://res.cloudinary.com/djwetaeqt/image/upload/v1718060751/github_Images/ScreenshotGithub_x9mgeb.png)


## Table of Contents

- Features
- Technologies Used
- Setup Instructions
- State Management
- Screen Limit



## Features

- User authentication (login and signup)
- Browse and search for movies and TV shows
- View detailed information about selected content
- Play trailers and full-length videos
- User profile management
- Limit of 5 screens per user
- Shoping on shop side navigation
- Integration shop profile from netflix

## Technologies Used

- React.js: JavaScript library for building user interfaces
- Vite: Next-generation frontend tooling for a fast development environment
- TailwindCSS: Utility-first CSS framework
- DaisyUI: TailwindCSS component library
- Redux: State management library
## Technologies Used

**Client:** React.js with Vite, TailwindCSS, DaisyUI, Redux.

**Server:** Node, Express, JWT authentication, bcrypt, Joi validation, Nodemailer verifaction.

 
[🔗 Link to server repo](https://github.com/Rosenfeld99/Netflix_project_server)




## Setup Instructions

Clone the repository:

```bash
  git clone https://github.com/Rosenfeld99/Netflix_project_client.git
```
Install dependencies:

```bash
  npm install
```
Start the development server:

```bash
  npm run dev
```
Build for production:

```bash
  npm run build
```

## State Management

Redux is used to manage the global state of the application, including user authentication, screen management, and content browsing.

- Auth Slice: Manages user login, signup, and authentication state
- User Slice: Manages user profile and screen limit state
- Content Slice: Manages movie and TV show data
- Shop Slice Manages products and categories

## Screen Limit

Each user is limited to a maximum of 5 screens. This is managed in the User Slice of the Redux store. If a user tries to add more than 5 screens, they will be notified and prevented from doing so.
is blocked in fron and server.
