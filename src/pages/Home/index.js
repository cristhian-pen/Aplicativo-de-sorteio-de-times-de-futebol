import {StatusBar} from 'expo-status-bar';
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, } from '@expo/vector-icons';

import Menu  from '../../components/Menu';
import BtnSortear from '../../components/BtnSorteio';
import { ContainerLogo, Logo, Titlelogo, 
        Subtitle, Undertitle, ContainerInput, ContainerInput2,
        BoxIcon, Input } from './style';


export default function Home() {
    return(
        <LinearGradient
            colors={['#E89700','#FFB114']}
            style={{flex: 1, justifyContent: 'center' }}
        >
             <ContainerLogo>
                <Titlelogo>Futebol NAD</Titlelogo>
                <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                <Subtitle>Sorteio dos Jogadores</Subtitle>
                <Undertitle>Betonera Stadium</Undertitle>
            </ContainerLogo> 
           <ContainerInput>
               <BoxIcon>
                   <MaterialCommunityIcons name='human-male-male' size={24} color="black" />
               </BoxIcon>

               <Input
                    placeholder="Digite o total de jogadores"
                    KeyboardType="numeric"
               />
               
            </ContainerInput>

            <ContainerInput2>        
               <BoxIcon>
                    <MaterialCommunityIcons name='human-greeting' size={24} color="black" />
               </BoxIcon>

               <Input
                    KeyboardType="numeric"
                    placeholder="Quantidade de jogadores por time " 
               /> 
            </ContainerInput2> 

            <BtnSortear/>
            <StatusBar style="light"/>
            <Menu/>
    
        </LinearGradient>
    )
    
}