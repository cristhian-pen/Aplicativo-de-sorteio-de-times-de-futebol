import React  from "react";
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import Home from './pages/Home';
import rsorteio from './components/rsorteio';
import sair from './components/sair';
import pagsorteio from './pages/pagsorteio';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Routes(){
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#363233',
                width: 240,            }}
            drawerContentOptions={{
                inactiveTintColor: '#fff',
                activeBackgroundColor: '#C4C4C4',
                activeTintColor: '#363233',
                marginTop: 16,
                labelStyle:{
                    fontSize: 18,
                }
            }}        
        >

            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    drawerIcon: ({focused,size,color}) => (
                        <AntDesign
                            name= {focused ? 'home' : 'home'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="rsorteio"
                component={rsorteio}
                options={{
                    title: "Reiniciar Sorteio",
                    drawerIcon:({focused,size,color}) => (
                        <AntDesign
                            name= {focused ? 'retweet' : 'retweet'}
                            size= {size}
                            color= {color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="sair"
                component={sair}
                options={{
                    title: "Sair",
                    drawerIcon:({focused,size,color}) => (
                        <FontAwesome
                            name={focused ? 'sign-out' : 'sign-out'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="pagsorteio"
                component={pagsorteio}
            />

        </Drawer.Navigator>               
    );
            
    }
export default Routes;