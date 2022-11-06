import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react"
import { Alert,  FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeaderBar } from "../../components"
import { COLORS } from "../../constants";
import { rootStyles as styles, loginStyles as styles_ } from '../../styles';
import { handleCheck, isCheck, layoutSeat, seats } from "../../utils";

const BookingSeat = (props: any) => {
    let { navigation, route } = props || {};
    let { title, price } = route?.params?.selectedItem || {};
    const [user, setUser] = useState<any>({});
    const [seatSelected, setSeatSelected] = useState<Array<any>>([]);

    useEffect(() => {
        init();
        return () => { };
    }, []);

    const init = async () => {
        try {
            let response: any = await AsyncStorage.getItem('userLogin');
            setUser(JSON.parse(response)?.[0]);
        } catch (e) {
            console.log(e)
        }
    }

    const renderLayout = (lay: string) => {
        return (
            <ScrollView style={{ width: '50%' }}>
                {
                    layoutSeat.map((item_: any, ikey) => {
                        let color = item_?.status == 'available' ? COLORS.darkGreen : 'booked' ? COLORS.lightGray3 : COLORS.blue;
                        return (
                            <FlatList
                                key={ikey}
                                data={[1, 2, 3, 4]}
                                horizontal
                                contentContainerStyle={{ padding: 4 }}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    let isStatus = isCheck(seatSelected, lay.concat(ikey?.toString(), index?.toString()));
                                    return (
                                        <TouchableOpacity onPress={() => handleSeats(item_?.status, lay, ikey, index)} key={index} style={{ marginHorizontal: 8 }}>
                                            <MaterialIcons
                                                name={isStatus ? "sofa-single-outline" : "sofa-single"}
                                                color={isStatus ? color : (user?.gender) == 'F' ? COLORS.darkPink : COLORS.blue}
                                                size={20}
                                            />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        )
                    })
                }
            </ScrollView>
        )
    }

    const handleSeats = (status: string, lay: string, ikey: number, index: number) => {
        if (status != 'booked') {
            handleCheck(seatSelected, lay.concat(ikey?.toString(), index?.toString()), setSeatSelected)
        } else {
            Alert.alert("Cannot Book the Seats");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <>
                <HeaderBar isBack={true} onTap={() => navigation.goBack()} headerText={'Select Seat'} />
                <View style={{ flexDirection: 'row', margin: 8 }}>
                    <Text style={{ paddingHorizontal: 8, fontWeight: '900' }}>{`Gender : `}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '900', color: '#fff', backgroundColor: (user?.gender == 'F') ? COLORS.darkPink : COLORS.blue, paddingHorizontal: 4 }}>{user?.gender}</Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: '900', alignSelf: 'center', color: COLORS?.red_1, paddingBottom: 16 }}>{title}</Text>
                <View style={{ flex: 1, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FlatList
                        horizontal
                        data={seats}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            let { color, name, isFemale } = item || {};
                            let valueColor = (user?.gender == 'F') ? isFemale : color;
                            return (
                                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 8 }}>
                                    <View style={{ height: 20, width: 20, backgroundColor: valueColor, borderRadius: 100 }} />
                                    <Text style={{ fontSize: 14, fontWeight: '900', color: valueColor, paddingHorizontal: 4 }}>{name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={{ flex: 7, paddingHorizontal: 16, flexDirection: 'row' }}>
                    {renderLayout('left')}
                    {renderLayout('right')}
                </View>
            </>
            <View style={{ margin: 16 }}>
                <Text style={{ fontSize: 18, color: COLORS.red_1 }}>{`Total Seats Selected :  ${seatSelected?.length}`}</Text>
                <Text style={{ fontSize: 18, color: COLORS.red_1 }}>{`Total Price :  ${seatSelected?.length * price}`}</Text>
            </View>
            <TouchableOpacity disabled={!seatSelected?.length} onPress={() => navigation.navigate('Success', { movie: route?.params?.selectedItem, price: (seatSelected?.length * price) })}>
                <LinearGradient
                    colors={!seatSelected?.length ? [COLORS.lightGray, COLORS.lightGray2, COLORS.lightGray3] : ['#A246C7', '#8947D3', '#654DD7']}
                    style={{ ...styles_.signIn, width: '90%', alignSelf: 'center' }}
                >
                    <Text style={[styles_.textSign, {
                        color: '#fff'
                    }]}>Book Ticket</Text>
                </LinearGradient>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default BookingSeat;