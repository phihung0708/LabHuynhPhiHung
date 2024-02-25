 import { StatusBar } from 'expo-status-bar';
 import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

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
