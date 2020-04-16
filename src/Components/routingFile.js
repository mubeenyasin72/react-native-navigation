import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Frist from './firstComponent';
import Second from './secondComponent';
const RootStack = createSwitchNavigator(
  {
    Frist: {screen: Frist},
    Second: {screen: Second},
  },
  {
    initialRouteName: 'Frist',
  },
);
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
