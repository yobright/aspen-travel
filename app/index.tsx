// index.tsx
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import {images} from "@/constants";
import { router } from "expo-router"

const Home = () => {
    return (
        <ImageBackground
            source={images.welcome}
            style={styles.backgroundImage}
        >
            <View style={styles.topContainer}>
                <Text style={styles.title}>Aspen</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.subtitle}>Plan your</Text>
                <Text style={styles.subtitleBold}>Luxurious Vacation</Text>
                <TouchableOpacity style={styles.exploreButton} onPress={() => {
                    router.replace('/(tabs)')
                }}>
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'space-between',


    },
    topContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 116,
        color: '#fff',
        fontFamily: 'Hiatus',
    },
    bottomContainer: {
        marginBottom: 60,
    },
    subtitle: {
        fontSize: 24,
        color: '#fff',
        marginHorizontal: 14

    },
    subtitleBold: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        marginHorizontal: 14

    },
    exploreButton: {
        backgroundColor: '#176FF2',
        alignItems: 'center',
        borderRadius: 26,
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 44,
        paddingLeft: 44,
        marginHorizontal: 8
    },
    exploreButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});
export default Home;
