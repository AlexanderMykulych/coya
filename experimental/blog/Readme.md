# Vitepress
Example how you can use Coya with Vitepress


## Using

Install
```bash
pnpm i coya-vue-component
```

Register component in `docs/.vitepress/theme/index.js`
```js
import DefaultTheme from 'vitepress/theme';
import Coya from 'coya-vue-component';
import 'coya-vue-component/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Coya', Coya)
  }
}
```

Use in `*.md`

```
<script setup>
import { ref } from 'vue'
import config from './config.coya.json';
</script>

## Blog

Coya component here 🤩

<pre>
    <Coya :config="config" style="height: 60vh; border: 2px solid black;"/>
</pre>
```