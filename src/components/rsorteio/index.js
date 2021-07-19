import React from "react";
import {BackHandler, View} from 'react-native';

import Home from "../../pages/Home";

export default function Reinicia() {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
              {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
              },
              { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
          };
        
          useEffect(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
        
            return () =>
              BackHandler.removeEventListener("hardwareBackPress", backAction);
          }, []);
        
          return (
            <View>
                <Home/>
            </View>
          );

        };