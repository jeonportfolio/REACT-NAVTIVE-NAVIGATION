import React from "react";
import {View, Text} from 'react-native';

export class ScreenC extends React.Component{
    render () {
        return (
            <View style = {{ flex:1, alignItems: 'center', justifyContent: 'center'}}> 
                    <Text>ScreenC 입니다.</Text>
            </View>
        )
    }
}
