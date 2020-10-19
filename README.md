# Vue 3 tree-shaking bug

This repo has two branches - one written in Vue 2, one in Vue 3. The components and logic involved are identical (a simple diff of the branches will illustrate this). The only differences are in the dependencies introduced by Vue itself, using `defineComponent` in Vue 3 instead of `Vue.extend` for Vue 2, and the inclusion of postCSS for processing the css.

## Reproducing the bug

### Setup
- Clone repo
- Checkout `Vue 2` branch
- Run `npm install` followed by `npm run build` and `npm pack` to create `.tgz` that can be used in external projects. Rename that file to `demolib-vue2.tgz`
- Checkout `Vue 3` branch and repeat last step, renaming file to `demolib-vue3.tgz`
- Create two sample Vue cli projects, one each for Vue 2 and Vue 3
- Install cli project dependencies, including the correct `.tgz` files from the prior steps

### Usage

Load 2 of the 3 components provided by the library. Components are `Cat`, `Dog`, and `Fish`.
```js
import { Cat, Dog } from 'demolib'; // No Fish

// For Vue 2
Vue.component('cat', Cat);
Vue.component('dog', Dog);
Vue.mount('#app');

// For Vue 3
const app = createApp(App);
app.component('cat', Cat);
app.component('dog', Dog);
app.mount('#app');
```

```html
<template>
    <p>Pet options:</p>
    <cat />
    <dog />
    <!-- Fish is not used -->
</template>
```

### Verify tree-shaking

Execute `npm run build` in each cli project. The resulting "optimized" javascript files will include a `chunk-vendors` file which should include a tree-shaken version of demolib. Search this file for the following strings:
- "The cat is named"
- "The dog is named"
- "The fish is named"

If tree-shaking worked, you should not see `The fish is named` anywhere in the output. In the Vue 2 version, tree-shaking works properly. In the Vue 3 version, the unused code is still included.