import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { HeaderBar } from '../../components';
import { rootStyles as styles, movieStyles as styles_ } from '../../styles';
import { movies } from '../../utils';


const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <HeaderBar isBack={false} headerText={'Movies'} />
        <View style = {{ flex: 8 }}>
          <FlatList
            data={movies}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {{ paddingBottom: 100 }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              let { title, genre, poster } = item || {};
              return (
                <TouchableOpacity key={index} style={styles_.container} onPress={() => navigation.navigate('Booking', { selectedItem: item })}>
                  <View style={styles_.imageContainer}>
                    <Image source={{ uri: poster }} style={styles_.image} />
                  </View>
                  <Text style={styles_.title} numberOfLines={1}>{title}</Text>
                  <Text style={styles_.genre} numberOfLines={1}>{genre}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;
