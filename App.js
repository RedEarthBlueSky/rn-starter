import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { ComponentsScreen, HomeScreen, ListScreen, ImageScreen, CounterScreen } from "./src/screens";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Image: ImageScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Counter",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
