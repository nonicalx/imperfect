import React from 'react';
import img1 from "./assets/illustration1.jpg"
import img2 from "./assets/illustration2.jpg"
import img3 from "./assets/illustration3.jpg"
import NavBar from './NavBar'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { View, Image, Text, FlatList, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Item = ({ item }) => {
    console.log("item", item.img)
    return (
        <View style={{ paddingHorizontal: 10, alignItems: "center" }}>
            <Image source={item.img} style={styles.images} />
        </View>
    )
}


const dps = [
    {
        id: 1, img: img1
    },
    {
        id: 2, img: img2
    },
    {
        id: 3, img: img3
    },
]
const Home = () => {


    return (
        <SafeAreaView style={styles.spread}>


            {/* <Text >WELCOME</Text> */}
            <NavBar />
            <View style={{ marginTop: "10%", }}>
                <FlatList data={dps} renderItem={Item} horizontal={true} keyExtractor={item => item.id} />
            </View>
            <View style={{ display: "flex", alignItems: "center", alignContent: "center", paddingHorizontal: 20 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.round}>
                            <Icon name="close" size={40} color="blue" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.choice}>
                        <View style={styles.round}>
                            <Icon name="favorite-border" size={40} color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    spread: {
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center"
        flex: 1
    },

    round: {
        backgroundColor: "white",
        height: 70,
        width: 70,
        borderRadius: 35,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },

    choice: { width: "45%", justifyContent: "center", alignItems: "center" },

    images: {
        borderRadius: 6,
        resizeMode: "cover",
        height: 400,
        width: 300
    }
})

export default Home;