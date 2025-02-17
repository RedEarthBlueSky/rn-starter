import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { ComponentsScreen, HomeScreen, ListScreen, ImageScreen, CounterScreen,
  AddColorScreen, SquareScreen
 } from "./src/screens";

const navigator = createStackNavigator(
  {
    AddColor: AddColorScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    Image: ImageScreen,
    List: ListScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: "Square",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
