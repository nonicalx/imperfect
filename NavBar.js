import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <View><Icon name="settings" size={30} color={"gray"} /></View>
            <View><Icon name="home" size={30} color={"red"} /></View>
            <View><Icon name="chat" size={30} color={"gray"} /></View>
        </View>
    )
}


const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        // height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 4,
        shadowOffset: { width: 0, height: 50 },
        shadowColor: "black",
        shadowOpacity: 2.0
    }
})

export default NavBar
