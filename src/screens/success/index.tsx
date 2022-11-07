import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, View, Image, ScrollView, Animated, Easing } from "react-native";
import { HeaderBar } from "../../components";
import { COLORS, imgs } from "../../constants";

let { Icons } = imgs || {};

const SuccessPage = ({ navigation, route }: any) => {
    let { movie, price } = route?.params || {};
    const [successPos, setSuccessPos] = useState(new Animated.Value(0));

    const successPosInterpolate = successPos.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });

    const successTrans = {
        transform: [
            { translateX: successPosInterpolate },
            { scale: successPosInterpolate }
        ]
    };

    useEffect(() => {
        Animated.timing(successPos, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
    }, [])

    const renderSwitch = () => {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ ...successTrans }}>
                        <Image source={Icons?.checkLogo} style={{ width: 120, height: 120, alignSelf: "center", top: '25%' }} resizeMode={"contain"} />
                    </Animated.View>
                </View>
                <View style={{
                    flex: 4,
                    padding: 64,
                    alignItems: 'center'
                }}>
                    <ScrollView style={{ paddingTop: '5%', flex: 1 }} showsVerticalScrollIndicator={false}>
                        {
                            <View style={{ margin: 16, alignSelf: 'center' }}>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{`Movie : ${movie?.title}`}</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{`Payment : Online`}</Text>
                                <Text style={{ fontSize: 16, fontWeight: '400' }}>{`Total Amount : ${price}`}</Text>
                            </View>
                        }
                    </ScrollView>
                    <View style={{ flex: 1, width: '120%' }}>
                        <TouchableOpacity onPress={() => navigation.popToTop()} style={{ borderColor: COLORS.blue, borderWidth: 1, backgroundColor: COLORS.blue, height: 50, borderRadius: 30 }}>
                            <Text style={{ color: COLORS.white, alignItems: 'center', paddingVertical: 16, alignSelf: 'center', fontWeight: '900' }}>{'Done'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderBar isBack={true} onTap={() => navigation.popToTop()} headerText={'Booked Status'} />
            </SafeAreaView>
            {renderSwitch()}
        </>
    )
}

export default SuccessPage;