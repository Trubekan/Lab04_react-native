import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Settings from "./Setting";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Inicio" component={Home}/>
        <Drawer.Screen name="Sobre mi" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


