import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../constants';

interface IHeader {
    headerText: string;
    isBack: boolean;
    onTap?: Function | any;
    onTitleCallback?: Function | any;
    rightProps?: Function | any;
}

const HeaderBar = (props: IHeader) => {
    const { headerText, isBack, onTap, rightProps, onTitleCallback } = props || {};

    return (
        <View style={{ flex: 1 }}>
            <View style={{ margin: 16, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 0 }}>
                {
                    isBack ?
                        <TouchableOpacity onPress={onTap} style={{ top: '2%' }}>
                            <MaterialIcons
                                name={'arrow-back-ios'}
                                color="#000"
                                size={24}
                            />
                        </TouchableOpacity>
                        :
                        <View />
                }
                <TouchableOpacity onPress={onTitleCallback} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 28, color: COLORS.black, fontWeight: '900' }}>{headerText}</Text>
                </TouchableOpacity>
                {rightProps ? rightProps() : <View />}
            </View>
            <View style={{ borderColor: COLORS.lightGray3, borderWidth: 0.75, top: '-10%' }} />
        </View>
    )
}

export default HeaderBar