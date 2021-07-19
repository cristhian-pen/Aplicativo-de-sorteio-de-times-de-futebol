import {StatusBar} from 'expo-status-bar';
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core'; '@react-navigation/native';


import Menu from '../../components/Menu';
import { Htext, BtnContent,Textbtn } from './style';



export default function PagSorteio() {
    const navigation = useNavigation();
    return(
        <LinearGradient
            colors={['#E89700','#FFB114']}
            style={{flex: 1, justifyContent: 'center' }}
        >
        
        <Htext>Hora do Sorteio</Htext>
        
        <BtnContent>
            <Textbtn>Toque e segure para sortear seu time</Textbtn>
        </BtnContent>
        <Menu/>
        </LinearGradient>
    )
    
}