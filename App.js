/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * <View style={{ flex: 3,flexWrap:'wrap'}}>
          <Image source={require('./images/mainlogo.jpeg')} style={{ width: 200, height: 200, }} />
          <Text style={{ fontSize: 25, color: '#f05454',alignContent: 'center',flexShrink:1}}>Welcome</Text>
        </View>
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, CheckBox, TextInput, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderWidth: 1,
    fontSize: 15,
    paddingLeft:30,
    width: 300,
    height: 40

  },
  button_Login:
  {
    marginTop: 30,
    borderWidth: 1,
    backgroundColor: '#f05454',
    width: 300,
    height: 40
  },
  container:
  {
    flexDirection: 'row',
    top: 32

  },
  dashContainer:
  {
    flexDirection: 'row',
    marginTop: 50

  },
  hairline:
  {
    backgroundColor: '#f05454',
    height: 5,
    width: 100,
    top: 10

  },
  orText:
  {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 20,
    paddingHorizontal: 35,
    alignSelf: 'center',
    color: '#f05454'
  },

  button_SignUp:
  {
    width: 60,
    height: 30,
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#f05454'
  },
  imageContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageStyle:
  {
    height: 50,
    width: 50,
    borderRadius: 10,
  }
});

class App extends React.Component {


  render() {
    return (
      <>
        

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <ScrollView>
          <Image source={require('./images/mainlogo.jpeg')} style={{ width: 200, height: 200,}} />
          <Text style={{ fontSize: 25, color: '#f05454'}}>Welcome</Text>
            <TextInput style={styles.input} placeholder='enter here' />
            <TextInput style={styles.input} placeholder='enter here' />
            <View style={styles.container}>
              <CheckBox style={{ bottom: 5 }} />
              <Text > Remember me?</Text>
             </View>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
              <Text style={{ alignSelf: 'flex-end', color: 'blue', textDecorationLine: 'underline', }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_Login} >
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', top: 2 }} >Login</Text>
            </TouchableOpacity>
            <Text style={{ alignSelf: 'flex-start', top: 22, color: '#ff5454' }}>
              Not a member yet?
            </Text>

            <TouchableOpacity style={styles.button_SignUp} >
              <Text style={{ color: 'white', textAlign: 'center', top: 2 }}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.dashContainer}>
              <View style={styles.hairline} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.hairline} />
            </View>

            <View style={styles.imageContainer}>
              <Image source={require('./images/google.png')} style={styles.imageStyle} />
              <Image source={require('./images/facebook.jpg')} style={styles.imageStyle} />
              <Image source={require('./images/instagram.jpg')} style={styles.imageStyle} />
            </View>
          </ScrollView>
        </View>

      </>

    );

  }
}



export default App;