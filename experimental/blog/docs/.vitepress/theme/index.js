import DefaultTheme from 'vitepress/theme';
import Coya from 'coya-vue-component';
import 'coya-vue-component/dist/style.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Coya', Coya)
  }
}