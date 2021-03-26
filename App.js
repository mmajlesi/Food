import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultRestaurantShowScreen from './src/screen/ResultRestaurantShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultRestaurant : ResultRestaurantShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  });

export default createAppContainer(navigator);

