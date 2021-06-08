# Vue

<!-- Syara UI is set of tools created to provide developers a easy and fast way to build rich user interfaces with Vue/React components. -->

[[toc]]

## Prerequisites

* Node.js 12+
* Vue.js 2.x for `vue2-syara-ui` or 3.x for `vue-syara-ui`

## Installation

There are versions available for Vue 2.x and 3.x projects.

Just navigate to your project's folder, open the terminal and type:


``` bash
npm install vue2-syara-ui
```

or (if your project is built using vue 3.x):
``` bash
npm install vue-syara-ui
```

## Using with your projects

> Vue 2.x projects

``` js

    // regular imports for vue 2.x
    import Vue from 'vue'
    import App from './App.vue'

    // import syara ui from module vue2-syara-ui
    import SyaraUi from 'vue2-syara-ui'
    // register syara globally
    Vue.use(SyaraUi)
    
    // Or choose only the components you need
    import { SyaraUiComponents } from 'vue2-syara-ui'
    Vue.use(SyaraUiComponents.SyaraTable)
    
    // ...

```

> Vue 3.x projects

``` js

    // regular imports for vue 3.x
    import { createApp } from 'vue'
    import App from './App.vue'

    // import syara ui from module vue-syara-ui
    import SyaraUi from 'vue-syara-ui'

    createApp(App).use(SyaraUi).mount('#app')

```

## More information

> [![github](https://github.com/favicon.ico)](https://github.com/mLandim/vue2-syara-ui) [![npm](https://www.npmjs.com/favicon.ico)](https://www.npmjs.com/package/vue2-syara-ui) 