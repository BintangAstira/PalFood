import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import { Home2, Bag2, Profile } from 'iconsax-react-native';
import PesananScreen from '../screens/Makanan';
import TransaksiScreen from '../screens/Transaksi';
import EditForm from '../screens/Data'; // Impor EditForm
import DataScreen from '../screens/EditForm'; // Impor DataScreen
import Register from '../screens/Register';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pesanan" component={PesananScreen} />
            <Stack.Screen name="Transaksi" component={TransaksiScreen} />
            <Stack.Screen name="EditForm" component={EditForm} />
            <Stack.Screen name="DataScreen" component={DataScreen} />
            {/* <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            /> */}
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Beranda',
                        tabBarIcon: ({ color, size }) => (
                            <Home2 name="Home" size={'30'} color={'black'} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Pesanan"
                    component={PesananScreen}
                    options={{
                        tabBarLabel: 'Pesanan',
                        tabBarIcon: ({ color, size }) => (
                            <Bag2 name="nama-ikon-pesan" size={'30'} color={'black'} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Profil"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profil',
                        tabBarIcon: ({ color, size }) => (
                            <Profile name="nama-ikon-profil" size={'30'} color={'black'} />
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
