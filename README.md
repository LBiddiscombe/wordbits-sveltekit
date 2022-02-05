# Sveltkit Starter

A start kit that includes the following.

## [Sveltekit](https://kit.svelte.dev/)

```
npm init svelte@next my-app
cd my-app
npm install
```

## [Tailwind](https://tailwindcss.com/)

```
npx svelte-add@latest tailwindcss
```

## [DaisyUI](https://daisyui.com/)

```
npm i daisyui
```

```
// tailwind.config.js

module.exports = {
  ...
  plugins: [
    require('daisyui')
  ]
}
```

```
// Add "data-theme" to html element

<html data-theme="cupcake">
```

[See Themes here](https://daisyui.com/docs/default-themes)

## [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/)

```
npm i @testing-library/svelte @testing-library/jest-dom @babel/core @babel/preset-env jest babel-jest @types/jest svelte-jester -D
```

```
// package.json

"scripts": {
  ...
  "test": "jest src",
  "test:watch": "npm run test -- --watch"
},
"jest": {
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester"
  },
  "moduleFileExtensions": [
    "js",
    "svelte"
  ],
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ]
}

```

```
// .babelrc

{
	"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

```
// .eslintrc.cjs

env: {
  ...
  'jest/globals': true
}
```
## Typing via JSDocs approach

See [this walkthrough](https://www.swyx.io/jsdoc-swyxkit/) from [Shawn Wang - Swyx](https://www.swyx.io/).