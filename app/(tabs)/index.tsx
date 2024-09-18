import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {images} from "@/constants";
import {router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {
    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                <View style={styles.heading} >
                    <Text style={styles.headingSubTitle}>Explore</Text>
                    <Text style={styles.headingTitle}>Aspen</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>Aspen, USA</Text>
                    <FontAwesome name="chevron-down" size={14} color="#3B82F6" />
                </View>
            </View>

            <View style={styles.searchBar}>
                <FontAwesome name="search" size={20} color="#888" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Find things to do"
                    placeholderTextColor="#888"
                />
            </View>

            <View style={styles.tabs}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.tabItemActive}>
                        <Text style={styles.tabTextActive}>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Hotels</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Adventure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Text style={styles.tabText}>Activities</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Popular</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionLink}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.card}>
                            <Image source={images.alleyplace} style={styles.cardImage} />
                            <View style={styles.cardOverlay}>
                                <Text style={styles.cardTitle}>Alley Palace</Text>
                                <View style={styles.cardRating}>
                                    <FontAwesome name="star" size={14} color="#FFD700" />
                                    <Text style={styles.ratingText}>4.1</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/place");
                            }}>

                            <View style={styles.card}>

                                <Image source={images.coeursalpes} style={styles.cardImage} />
                                <View style={styles.cardOverlay}>
                                    <Text style={styles.cardTitle}>Coeurdes Alpes</Text>
                                    <View style={styles.cardRating}>
                                        <FontAwesome name="star" size={14} color="#FFD700" />
                                        <Text style={styles.ratingText}>4.5</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.cardSmall}>
                            <Image source={images.exploreaspen} style={styles.cardImageSmall} />
                            <View style={styles.cardOverlaySmall}>
                                <Text style={styles.cardTitleSmall}>Explore Asen</Text>
                                <Text style={styles.cardDetailsSmall}>2N/3D</Text>
                            </View>
                        </View>
                        <View style={styles.cardSmall}>
                            <Image source={images.luxuriousaspen} style={styles.cardImageSmall} />
                            <View style={styles.cardOverlaySmall}>
                                <Text style={styles.cardTitleSmall}>Luxurious Aspen</Text>
                                <Text style={styles.cardDetailsSmall}>2N/5D</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        fontFamily: 'Montserrat'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    heading: {
        flex:1,
    },
    headingTitle: {
        fontSize: 32,
        fontWeight: '500',
        lineHeight: 39,
        fontFamily: 'Montserrat'

    },
    headingSubTitle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17,
        fontFamily: 'Montserrat'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 16,
        color: '#3B82F6',
        marginRight: 5,
        fontFamily: 'Montserrat',
        fontWeight: '400',

    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '##F3F8FE',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
        height: 50,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#000',
    },
    tabs: {
        flexDirection: 'row',
        marginTop: 20,
    },
    tabItem: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#EDEDED',
        borderRadius: 50,
        marginRight: 10,
    },
    tabItemActive: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#3B82F6',
        borderRadius: 20,
        marginRight: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#000',
    },
    tabTextActive: {
        fontSize: 16,
        color: '#FFF',
    },
    section: {
        marginTop: 30,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sectionLink: {
        fontSize: 16,
        color: '#3B82F6',
    },
    card: {
        width: 200,
        height: 250,
        marginRight: 15,
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardOverlay: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    cardRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    ratingText: {
        fontSize: 16,
        color: '#FFF',
        marginLeft: 5,
    },
    cardSmall: {
        width: 150,
        height: 150,
        marginRight: 15,
        borderRadius: 20,
        overflow: 'hidden',
    },
    cardImageSmall: {
        width: '100%',
        height: '100%',
    },
    cardOverlaySmall: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 10,
    },
    cardTitleSmall: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    cardDetailsSmall: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 2,
    },
});

export default HomeScreen;

