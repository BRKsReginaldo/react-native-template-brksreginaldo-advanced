import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from '~/pages/Main';
import About from '~/pages/About';

const Routes = createAppContainer(createSwitchNavigator({ Main, About }, {
  initialRouteName: 'Main',
}));

export default Routes;
