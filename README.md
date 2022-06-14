# Miinto React Workshop

Introduction to React.  
This demo project is made to highlight and showcase a few features of React. 

## Demo
https://miinto-react-workshop.vercel.app/

## Requirements

`Node 16` - can be installed with [tj/n]([url](https://github.com/tj/n))


## Installation

Clone down the project

```bash
git clone git@github.com:christofferbergj/miinto_react-workshop.git
```

```bash
cd miinto_react-workshop
```

Install dependencies
```bash
npm install
```

To start a local dev environment with Vite
```bash
npm run dev
```


## Folder structure

```bash
.
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── app.tsx
│   ├── components
│   ├── favicon.svg
│   ├── hooks
│   ├── main.tsx
│   ├── pages
│   ├── theme
│   ├── theme-context.tsx
│   ├── utils
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

**Important files and folders**

`main.tsx` is the entry point of the SPA. It will "bootstrap" React onto a DOM node.  
`app.tsx` is the core component – everything on screen flows through this.  

`components/` holds reusable components.  
`pages/` holds all views (only home view for now). 
