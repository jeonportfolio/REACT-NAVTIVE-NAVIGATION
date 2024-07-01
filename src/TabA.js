import React from "react";
import { View, Text } from "react-native";

export class TabA extends React.Component {
    render() {
        return(
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>TAB A 페이지 입니다.</Text>
            </View>
        )
    }
}