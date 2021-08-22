# Vue

<!-- Syara UI is set of tools created to provide developers a easy and fast way to build rich user interfaces with Vue/React components. -->

[[toc]]

## Requirements

* Node.js 12+
* Vue.js 2.x for `syara-ui-vue` or 3.x for `@syara/ui-vue`

## Installation

There are versions available for Vue.js 2.x and 3.x.

<!-- Just navigate to your project's folder, open the terminal and type: -->
``` bash
npm install syara-ui-vue
```

or (if you are using Vue.js 3.x):
``` bash
npm install @syara/ui-vue
```

## Using

> Vue 2.x projects

``` js

    // regular imports for vue 2.x
    import Vue from 'vue'
 
    // import and register SyaraUi globally (all components available)
    import SyaraUi from 'syara-ui-vue'
    import 'syara-ui-vue/dist/syara-ui.css'

    Vue.use(SyaraUi)
 

```

> Vue 3.x projects

``` js

    // regular imports for vue 3.x
    import { createApp } from 'vue'
    import App from './App.vue'

    import SyaraUi from '@syara/ui-vue'
    import '@syara/ui-vue/dist/syara-ui.css'

    createApp(App).use(SyaraUi).mount('#app')

```


<!-- 
## Source code

> [![github](https://github.com/favicon.ico)](https://github.com/mLandim/vue2-syara-ui) -->