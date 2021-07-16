import React from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ButtonMenu } from './style';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <ButtonMenu onPress={ () => navigation.openDrawer()} >
            <Feather name="menu" size={30} color="#000000"/>

        </ButtonMenu>
        
    )
    
}