
## TodoApp react ui

This is a simple react SPA made with vite, tailwindcss and typescript.

### Features

* Add, edit, and delete todo items
* Mark items as completed

### Technologies

* Typescript
* React
* Vite
* Vitest with playwright runner

### Prerequisites

To run the sample you need the following tools installed on your machine:

* node.js + npm LTS

### Development

1. Clone the repository:

```
git clone git@github.com:msiviero/TodoApp.git
```

2. Install dependencies:

```
npm i
```

3. Install playwright browsers:

```
npx playwright install
```

4. Run the application:

```
npm run dev
```

This assumes that you have a running [api server](https://github.com/msiviero/TodoApp) running locally on port 5000.

### Building

To build the application run:

```
npm run build
```

### Running the tests

To run the tests:

```
npm run test
```
