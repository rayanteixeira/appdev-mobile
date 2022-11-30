import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import { StatusBar } from 'react-native';



export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#7D40E7'/>
    <Routes />
    </>
  );
}


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 26
  
  }
})

*/