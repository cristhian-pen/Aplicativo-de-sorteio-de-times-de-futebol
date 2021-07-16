import React from "react";
import {Text, } from 'react-native';
import Menu from "../../components/Menu";
import { useNavigation } from '@react-navigation/native';


export default function Reinicia() {
    const navigation = useNavigation();
    return (
       
            <Btnreinicia onPress={ () => navigation.navigate('Home')} >
                <Text>Sorteio reiniciado</Text>
           </Btnreinicia>
           
                
    )
    
}