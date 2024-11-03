# GitHub User Search App

A React application that allows you to search GitHub users efficiently. Built with React, TypeScript, Redux Toolkit, and Tailwind.



## Live Demo
- Visit the live application: [GitSpace](https://git-space.vercel.app/)

![image](https://github.com/user-attachments/assets/7940cfad-d7c1-4fd2-9523-da9e6b0186a8)

## Features
- GitHub user search
- Dark/Light theme support
- Responsive design
- Pagination support

## Installation

1. Clone the repository
```bash
git clone https://github.com/immark7/github-app.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx
│   └── pages/ -> contain app pages
├── components/
│   ├── data-table/
│   ├── layout/
│   ├── search-input/
│   └── ui/ -> core components
├── hooks/
├── libs/
│   ├── constants/
│   ├── types/
│   └── utils/
├── services/
├── store/
└── main.tsx
```
## Further Improvements
### 1. Optimizations
- [ ] Apply API caching using RTK Query
- [ ] Add ErrorBoundary to show better error UI
- [ ] Add meta tags to enhance SEO
### 2. Feature Enhancements
- [ ] Implement search filters
- [ ] Implement request retry logic
- [ ] Implement error tracking
### 3. Testing Implementation
- [ ] Add unit tests using Jest and React Testing Library
- [ ] Add Storybook for component documentation
