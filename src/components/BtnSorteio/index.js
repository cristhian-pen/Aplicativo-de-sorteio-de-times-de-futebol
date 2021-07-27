import React from "react";
import { useNavigation } from '@react-navigation/core'; '@react-navigation/native';


import {Btnsorteio, ButtonText} from './style';

export default function BtnSortear() {
    const navigation = useNavigation();
    return(

            <Btnsorteio onPress={() =>  navigation.navigate('pagsorteio')} >
               <ButtonText>Sortear</ButtonText>
            </Btnsorteio>
    )
}