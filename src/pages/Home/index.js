import {StatusBar} from 'expo-status-bar'
import React from "react";
import { Text } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

export default function Home() {
    return(
        <LinearGradient
            colors={['#E89700','#FFB114']}
            style={{flex: 1, justifyContent: 'center' }}
        >
            <StatusBar
                style="light"
            />
            <Text>Aqui e assim!!!</Text>
            
        </LinearGradient>
    )
    
}