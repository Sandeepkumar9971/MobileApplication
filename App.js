
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Main from './Main';
import TestProvider from './Context/TestContext/TestProvider';

function App(){
 

  return (
   <View style={styles.container}>
    <TestProvider>
    <Main/>
    </TestProvider>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default App;
