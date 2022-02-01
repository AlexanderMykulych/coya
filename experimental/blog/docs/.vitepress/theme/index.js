import 'uno.css'
import DefaultTheme from 'vitepress/theme';
import CustomLayout from './CustomLayout.vue';
import Button from './Button.vue';
import Coya from 'coya-vue-component';
import 'coya-vue-component/dist/style.css';


export default {
    ...DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app }) {
        app.component('Coya', Coya);
        app.component('Button', Button);
    },
};
