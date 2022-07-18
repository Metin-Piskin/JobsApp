import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Jobs from "./pages/Jobs";
import JobsDetail from "./pages/JobsDetail";
import Favourites from "./pages/Favourites";
import AAProvider from "./context/Provider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JobsScreen" component={Jobs}
        options={{
          headerTitle: "Jobs",
          headerTintColor: "#EF5350",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="JobsDetailScreen" component={JobsDetail}
        options={{
          headerTintColor: "#EF5350",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}


function Router() {
  return (
    <AAProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#EF5350',
            },
            drawerActiveBackgroundColor: '#FDEAEA',
            drawerActiveTintColor: '#EF5350',
            drawerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'white',
          }}
        >
          <Drawer.Screen name="Jobs" component={JobsStack}
            options={{
              headerTintColor: "#EF5350",
              headerTitleAlign: "center",
              headerShown: false,
            }}
          />
          <Drawer.Screen name="Favourites" component={Favourites}
            options={{
              headerTintColor: "#EF5350",
              headerTitleAlign: "center",
              headerShown: false
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AAProvider>
  );
}
export default Router;