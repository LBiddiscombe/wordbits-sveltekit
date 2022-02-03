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
