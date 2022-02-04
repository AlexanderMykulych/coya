import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import './../styles/main.css';
import 'virtual:windi-utilities.css';
import 'prismjs';
import { startSocketClient } from '../socket';
import Coya from './../components/Coya.vue';
import App from './../App.vue';
window.Prism = window.Prism || {};
window.Prism.manual = true;
export * from 'coya-store';

export const FileSystemCoya = App;
export const startDebugClient = startSocketClient;
export default Coya;
