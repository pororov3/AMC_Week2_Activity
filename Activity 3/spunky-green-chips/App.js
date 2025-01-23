import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Activity3 = () => {
  const [initialText, setText] = useState("Mike Lester");
  const myKwento = "Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe Storyahe";

  const onClickTitle = () => {
    setText(<Text style={myStyles.textStyles1}>Pialago</Text>);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={myStyles.bodyContainer}>
        <Text style={myStyles.headerStytle} onPress={onClickTitle}>
          {initialText}
        </Text>
        <Text style={myStyles.headerStytle} numberOfLines={3}>
          IT<Text style={myStyles.textStyles1}>302</Text>
        </Text>
        <Text style={myStyles.textStyles1}>G<Text style={myStyles.textStyles2}>R<Text style={myStyles.textStyles3}>C</Text></Text></Text>
        
        <Text style={myStyles.textStyles1} numberOfLines={3}>
          {myKwento}
        </Text>
        <Text style={myStyles.textStyles2} numberOfLines={3}>
          {myKwento}
        </Text>
        <Text style={myStyles.textStyles3} numberOfLines={3}>
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
  textStyles1: {
    fontFamily: 'arial',
    textAlign: 'center',
    color: 'red'
  },
  textStyles2: {
    fontFamily: 'arial',
    textAlign: 'center',
    color: 'blue'
  },
  textStyles3: {
    fontFamily: 'arial',
    textAlign: 'center',
    color: 'green'
  }
});



export default Activity3;