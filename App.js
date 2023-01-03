import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import GlobalStyles from './constants/styles';
import { Ionicons } from "@expo/vector-icons";
import IconButton from './UI/IconButton';
import { useNavigation } from '@react-navigation/native';
import { ExpenseProvider } from './store/ExpenseContext';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


const ExpenseOverview = () => {

    let navigation = useNavigation();

    return (
      <BottomTab.Navigator initialRouteName="RecentExpenses" screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary700},
        headerTintColor: "white",
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary700},
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => {
          return <IconButton name="add" color={tintColor} size={24} onPress={() => {
              navigation.navigate("ManageExpenses");
          }}/>
        }
    
      }}>
        <BottomTab.Screen name="AllExpenses" component={AllExpenses} options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="calendar" color={color} size={size}/>
            )
        }}/>
        <BottomTab.Screen name="RecentExpenses" component={RecentExpenses} options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent Expenses",
            tabBarIcon: ({color, size}) => (
              <Ionicons name="hourglass" color={color} size={size}/>
            )
        }}/>
      </BottomTab.Navigator>
    )
}


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <ExpenseProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: "white",
      }}>
        <Stack.Screen name="ExpenseOverview" component={ExpenseOverview} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{
          presentation: "modal"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ExpenseProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
