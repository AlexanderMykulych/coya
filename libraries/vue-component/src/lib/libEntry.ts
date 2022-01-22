import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './../styles/main.css'
import 'virtual:windi-utilities.css'
import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";
window.Prism = window.Prism || {};
window.Prism.manual = true;
import Coya from "./../components/Coya.vue";
import { startSocketClient } from '../socket';
import App from './../App.vue';

export const FileSystemCoya = App;;
export const startDebugClient = startSocketClient;
export default Coya;