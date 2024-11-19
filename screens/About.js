import React from 'react'
import { StyleSheet, View, Text } from 'react-native';


export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.text}>Full Name: Teimur Terchyyev</Text>
                <Text style={styles.text}>Student ID: 101412670</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'serif',
        fontStyle: 'italic'
    },
    result: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'cyan',
        padding: 50,
        marginTop: 35,
        width: 360,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 14,

    }
})
