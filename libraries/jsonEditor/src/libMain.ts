// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
// your custom styles here
import './styles/main.css';
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css';

import JsonEditor from './components/JsonEditor.vue';
export default JsonEditor;
export * from './components/WidgetConfig';
