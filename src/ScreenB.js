import React from "react";
import { Button, Text, View } from "react-native";

export class ScreenB extends React.Component {
    render() {
        return (
            <View style= {{ flex:1, alignItems:'center', justifyContent: 'center'}}>
                    <Text>ScreenB 입니다. 받은값 : {this.props.route.params.value}</Text>

                    <Button
                        title='뒤로가기'
                        onPress={() => {
                            console.log('뒤로가기')
                        }}
                    />
            </View>
        )
    }
}