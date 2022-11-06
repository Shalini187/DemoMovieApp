import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { AuthContext, HeaderBar } from '../../components';
import { rootStyles as styles } from '../../styles';

const ProfileScreen = () => {
  const { signOut }: any = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <>
        <HeaderBar isBack={false} headerText={'Profile'} />
        <View style = {{ flex: 8 }}>
          <Button
            title="Sign Out"
            onPress={() => signOut()}
          />
        </View>
      </>
    </SafeAreaView>

  );
};

export default ProfileScreen;

