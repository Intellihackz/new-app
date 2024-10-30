import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.profile}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/image.png')} 
                    style={styles.profileImage} 
                />
            </View>
            <Text style={styles.name}>Ryan Schnetzer</Text>
            <Text style={styles.email}>ryansc@acme.com</Text>
            <Pressable 
                style={({ pressed }) => [
                    styles.editButton,
                    pressed && styles.editButtonPressed
                ]}
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
                <Text style={styles.arrow}>›</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        paddingVertical: 24,
    },
    imageContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#ffffff',
    },
    name: {
        marginTop: 16,
        fontSize: 28,
        fontWeight: '600',
        color: '#1a1a1a',
        letterSpacing: -0.5,
    },
    email: {
        marginTop: 4,
        fontSize: 16,
        fontWeight: '400',
        color: '#666666',
    },
    editButton: {
        marginTop: 24,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#235cb2',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#235cb2',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    editButtonPressed: {
        backgroundColor: '#1b4a8f',
        transform: [{ scale: 0.98 }],
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 8,
    },
    arrow: {
        fontSize: 20,
        color: 'white',
        marginTop: -2,
    },
});