import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Home from "./Home";
import Todo from "./Todo";
import Edit from "./Edit";


const Stack = createStackNavigator(
  {
    Home: Home,
    Todo: Todo,
    Edit: Edit
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(Stack);
