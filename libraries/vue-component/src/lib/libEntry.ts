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

export default Coya;
export const startDebugClient = startSocketClient;