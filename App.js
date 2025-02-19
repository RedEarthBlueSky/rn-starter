import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { ComponentsScreen, HomeScreen, ListScreen, ImageScreen, CounterScreen,
  AddColorScreen, SquareScreen, EnterNameScreen
 } from "./src/screens";

const navigator = createStackNavigator(
  {
    AddColor: AddColorScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    Counter: CounterScreen,
    EnterName: EnterNameScreen,
    Image: ImageScreen,
    List: ListScreen,
    Square: SquareScreen,
  },
  {
    initialRouteName: "EnterName",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
