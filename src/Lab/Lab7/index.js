import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './HomeScreen';
import User from './UserScreen'
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Lab7 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ forcused }) => {
                            return (
                                <View>
                                    <Image
                                        source={require('../../../src/assets/image/home.png')}
                                        resizeMode="contant"
                                        style={{ width: 40, height: 30 }}
                                    />
                                </View>
                            )
                        }
                    }}

                />
                <Tab.Screen name="User" component={User}
                    options={{
                        tabBarIcon: ({ forcused }) => {
                            return (
                                <View>
                                    <Image
                                        source={require('../../../src/assets/image/user.png')}
                                        resizeMode="contant"
                                        style={{ width: 40, height: 30 }}
                                    />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Lab7;