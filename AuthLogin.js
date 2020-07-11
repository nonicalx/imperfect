/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import BgImg from './assets/love.jpg'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Auth = (props) => {
  const [user, setUser] = useState({})
  const onChangeText = (key, text) => {
    console.log("texted", text)
    setUser({ ...user, [key]: text })
  }
  console.log("user", user)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={{ uri: "https://cdn.pixabay.com/photo/2016/11/02/00/37/love-1790142_960_720.jpg" }} style={styles.image}>

        <SafeAreaView style={styles.bgImage}>

          <View style={styles.body}>
            <Text style={styles.bigText}>
              Find Your Perfect Date
            </Text>
            <Text style={styles.sectionTitle}>The very essence of romance is uncertainty!</Text>
          </View>
          <View style={{ paddingHorizontal: 30, paddingVertical: 40 }}>
            <TextInput onChangeText={text => onChangeText("email", text)} style={styles.inputStyle} placeholder="Email" />
            <TextInput onChangeText={text => onChangeText("password", text)} style={styles.inputStyle} placeholder="Password" />
            <TouchableOpacity style={styles.touchableStyle}>
              <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  inputStyle: {
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "white",
    paddingLeft: 20,
    fontSize: 16,
    marginBottom: 20,
    borderColor: "transparent"
  },

  touchableStyle: {
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 30,
    backgroundColor: "#2a3a84",
    color: "white"
  },
  bigText: {
    color: "white",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "600",
    paddingBottom: 10
  },
  scrollView: {
    backgroundColor: "#98b3fe",
    color: "white"
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    padding: 10,
    color: "#8da8fe",
    zIndex: 4
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 20
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Auth;
