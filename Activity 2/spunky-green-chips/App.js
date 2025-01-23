import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Activity2 = () => {
  const [initialText, setText] = useState("Mike Lester");
  const myKwento = "Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe";

  const onClickTitle = () => {
    setText("Pialago");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyles.bodyContainer}>
        <Text style={myStyles.headerStytle} onPress={onClickTitle}>
          {initialText}
        </Text>
        <Text style={myStyles.textStyles} numberOfLines={3}>
          {myKwento}
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );

};

const myStyles = StyleSheet.create({
  bodyContainer: {
    dislplay: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  headerStytle: {
    fontFamily: 'arial',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: '10px'
  },
  textStyles: {
    fontFamily: 'arial',
    textAlign: 'center',
  }
});



export default Activity2;