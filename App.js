// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Splash from './src/screen/auth/Splash';
import SignUp from './src/screen/auth/SignUp';
import AuthHeader from './components/AuthHeader';
import Lab5 from './src/Lab/Lab5';
import Lab6 from './src/Lab/Lab6';
import Lab7 from './src/Lab/Lab7';
import TopTab from './src/Lab/Lab7/TopMenu';
import SignIn from './src/screen/auth/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './src/screen/app/Home';
import Profile from './src/screen/app/Profile';
import Favourites from './src/screen/app/Favourites';
import Crud from './src/Lab/Lab8/CRUD';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tabs = () => {
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused }) => {
//         let icon;
//         if (route.name === 'Home') {
//           icon = focused
//             ? require('./src/assets/icon/home_icon_active.png')
//             : require('./src/assets/icon/home.png');
//         } else if (route.name === 'Profile') {
//           icon = focused
//             ? require('./src/assets/icon/profile_active.png')
//             : require('./src/assets/icon/profile.png');
//         } else if (route.name === 'Favourites') {
//           icon = focused
//             ? require('./src/assets/icon/bookmark_active.png')
//             : require('./src/assets/icon/bookmark.png');
//         }
//         return <Image style={{ width: 24, height: 24 }} source={icon} />;
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarStyle: { borderTopColor: '#DADADA' },
//     })}>
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Favourites" component={Favourites} />
//     <Tab.Screen name="Profile" component={Profile} />

//   </Tab.Navigator >
// };
// const App = () => {
//   const isSignedIn = true;
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>

//         {isSignedIn ? (
//           <>
//             <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen
//               name="Splash"
//               component={Splash} />
//             <Stack.Screen
//               name="SignIn"
//               component={SignIn}
//               options={{ headerShown: false }} />
//             <Stack.Screen
//               name="SignUp"
//               component={SignUp}
//               options={{ headerShown: false }} />
//           </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
const App = () => {
  return (
    <Crud />
  );
}
export default App;
