import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Info = () => {

  const navigation = useNavigation();

    return (
    <View>
        <Text>Info Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
         <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button
          title="Return"
          onPress={() => navigation.goBack()}
        />
    </View>
  );
}
export default Info;