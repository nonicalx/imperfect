/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Auth from './AuthLogin';
import Home from './Home';
// import App from './App'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Home);
