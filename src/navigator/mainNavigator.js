import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList98138Navigator from '../features/ArticleList98138/navigator';
import ArticleList98137Navigator from '../features/ArticleList98137/navigator';
import ArticleList98136Navigator from '../features/ArticleList98136/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList98138: { screen: ArticleList98138Navigator },
ArticleList98137: { screen: ArticleList98137Navigator },
ArticleList98136: { screen: ArticleList98136Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
