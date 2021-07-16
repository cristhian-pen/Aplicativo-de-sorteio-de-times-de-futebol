import React  from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import Home from './pages/Home';
import Rsorteio from './pages/Rsorteio';
import sair from './pages/sair';

const Drawer = createDrawerNavigator();

function Routes(){
    return (
        <Drawer.Navigator
            drawerContentOptions={{
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
                            name= {focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Rsorteio"
                component={Rsorteio}
                options={{
                    title: "Reiniciar Sorteio",
                    drawerIcon: ({focused,size,color}) => {
                        <AntDesign
                            name={focused ? 'retweet' : 'retweet-outline'}
                            size={size}
                            color={color}
                        />
                    }
                }}
            
            />
        </Drawer.Navigator>
    );
}
export default Routes;