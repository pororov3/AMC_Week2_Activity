import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const MyTestApp = () => {
  return (
    <ScrollView style={{display: 'flex', justifyContent: 'center', height: '100%', width: '100%', }}>
      <Text
        style={{
         textAlign: 'center'
        }}>
        Mike Lester Pialago
      </Text>

      <Text style={{
         textAlign: 'center', paddingBottom: '10px'
        }}>
        IT302
      </Text>

      <Image
        source={{
          uri: 'https://th.bing.com/th/id/OIP.lwCualh4eAIO4xCYPinzLAAAAA?rs=1&pid=ImgDetMain'
        }}
        style={{width: 200, height: 200, alignSelf: 'center',}}
        ></Image>

      <Text style={{
         textAlign: 'center', paddingTop: '10px'
        }}>Label Sample</Text>
    </ScrollView>
  )
};

export default MyTestApp;