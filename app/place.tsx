// place.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {images} from "@/constants";
import {router} from "expo-router";
import { Ionicons } from '@expo/vector-icons';


const PlaceScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.headerButton}>
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerButton}>
                    <Ionicons name="heart-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Image
                    source={images.coeursalpes} style={styles.placeImage}
                />

                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.placeTitle}>Coeurdes Alpes</Text>
                    <Text style={styles.rating}>4.5 (355 Reviews)</Text>
                    <TouchableOpacity style={styles.mapButton}>
                        <Text style={styles.mapButtonText}>Show map</Text>
                    </TouchableOpacity>

                    <Text style={styles.description}>
                        Aspen is as close as one can get to a storybook alpine town in America. The choose-your-own-adventure possibilities—skiing, hiking, dining shopping and more.
                    </Text>
                    <TouchableOpacity style={styles.readMore}>
                        <Text style={styles.readMoreText}>Read more...</Text>
                    </TouchableOpacity>
                    <View style={styles.facilities}>
                        <Text style={styles.facilityText}>Heater</Text>
                        <Text style={styles.facilityText}>Dinner</Text>
                        <Text style={styles.facilityText}>Tub</Text>
                        <Text style={styles.facilityText}>Pool</Text>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.price}>$199</Text>
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookButtonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        fontFamily: 'Montserrat',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    headerButton: {
        padding: 10,
    },
    placeImage: {
        width: '100%',
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    content: {
        padding: 20,
        marginTop: 250,
    },
    placeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rating: {
        fontSize: 14,
        color: '#888',
        marginBottom: 10,
    },
    mapButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#1E90FF',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 8,
        marginBottom: 20,
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    readMore: {
        marginBottom: 20,
    },
    readMoreText: {
        fontSize: 14,
        color: '#1E90FF',
    },
    facilities: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    facilityText: {
        fontSize: 14,
        color: '#555',
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    bookButton: {
        backgroundColor: '#1E90FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default PlaceScreen;
