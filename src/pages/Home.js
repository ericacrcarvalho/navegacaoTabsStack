import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
         <Button
          title="Go to Contact"
          onPress={() => navigation.navigate("Contact")}
        />
    </View>
  );
}
export default Home;