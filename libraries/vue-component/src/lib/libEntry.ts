import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './../styles/main.css'
import 'virtual:windi-utilities.css'
import Coya from "./../components/Coya.vue";
import { startSocketClient } from '../socket';

export default Coya;
export const startDebugClient = startSocketClient;