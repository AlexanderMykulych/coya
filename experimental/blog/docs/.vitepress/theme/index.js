import DefaultTheme from 'vitepress/theme';
import CustomLayout from './CustomLayout.vue';
import Button from './Button.vue';
import Coya from 'coya-vue-component';
import 'coya-vue-component/dist/style.css';
import 'virtual:windi.css'
// // windicss devtools support (dev only)
import 'virtual:windi-devtools'

export default {
    ...DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app }) {
        app.component('Coya', Coya);
        app.component('Button', Button);
    },
};
