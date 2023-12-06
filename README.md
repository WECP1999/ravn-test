# React Ravn Challenge

## Setup

Clone the repository and run the following command

### Using yarn
```
  yarn install
```

### Using npm
```
  npm install
``` 

### Commands
Here are the commands you can run.

- `dev` Run the project in a test environment
- `test` Run tests without test coverage
- `lint` Execute the linter

## Project Description
this challenge was created with the purpose of demonstrating my knowledge in react, without using frameworks like Next or Gatsby, to show my technical skills working without a previous settup. Creating components and utilities from 0 with the help of libraries like: [styled-components]`https://styled-components.com`, [tailwind]`https://tailwindcss.com`, [twin.macro]`https://github.com/ben-rogerson/twin.macro`, [react-router]`https://reactrouter.com/en/main` and [context]`https://react.dev/learn/scaling-up-with-reducer-and-context`,as the main libraries.

## Folder structure
src/
├───__tests__/
├───assets/
│   └───file
├───components/
│   └───nameOfComponent/
│       └───components/...
│       └───styles/
│           └───style.ts
│       └───index.ts
│       └───NameOfComponent
├───context/
├───layouts/
├───routes/
├───styles/
├───utils/
│   └───utility
│       └───file
├───views/
│   └───nameOfView/
│       └───components/...
│       └───styles/
│           └───style.ts
│       └───NameOfView.tsx
│       └───index.ts
index.html

I chose this type of folder structure because it is neater to have separate components with their respective folders and each with their own components and styles, thus avoiding the creation of multiple components in the same branch and filling the main `component/` branch with folders.

## Decisions i made
the stack of technologies I used was for convenience and ease of development, besides, I think these tools are also the best currently on the market. For forms management we have react-hook-forms, which with its versatility and great capacity to customize components, is a very viable option for forms management, in conjunction with yup that facilitates validations.

Furthermore, by implementing tailwind in conjunction with styled-components, you get a scalability in terms of styling, having the ease of use of tailwind and the reusability that gives styled-components and both combined with twin.macro provide a smoother development experience.

## Proves it works
https://www.loom.com/share/b0335754365e4570af73b6b4063fab5e?sid=05698cdf-9b0b-4342-bbf0-d8daa632d13c
