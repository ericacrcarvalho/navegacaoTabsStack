import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {

  const navigation = useNavigation();

    return (
    <View>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Return"
          onPress={() => navigation.goBack()}
        />
    </View>
  );
}
export default Settings;