import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';


export default function Home({ navigation }) {

    const [dimension, setDimension] = useState(0);
    const [flooringPrice, setFlooringPrice] = useState(0);
    const [installationPrice, setInstallation] = useState(0);

    const [flooringCost, setFlooringCost] = useState(0);
    const [installationCost, setInstallationCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalCostWithTax, setTotalCostWithTax] = useState(0);
    // Units toggle button: false => sqft, true => sqm
    const [metric, setMetric] = useState(false);

    const toggleMetric = () => {
        setMetric(!metric);
    }

    useEffect(() => {
        const size = parseFloat(dimension) || 0;
        const flooring = parseFloat(flooringPrice) || 0;
        const installation = parseFloat(installationPrice) || 0;

        // Performning calculations
        const flooringCost = size * flooring;
        const installationCost = size * installation;
        const totalCost = flooringCost + installationCost;
        const tax = totalCost * 0.13;
        const totalCostWithTax = totalCost + tax;

        setFlooringCost(flooringCost);
        setInstallationCost(installationCost);
        setTotalCost(totalCost);
        setTax(tax);
        setTotalCostWithTax(totalCostWithTax);
    }, [dimension, flooringPrice, installationPrice])


    const onPressHandler = () => {
        navigation.navigate('About');
    }

    return (
        <ScrollView style={styles.container}
            contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center'
            }
            }>


            {/* <TouchableOpacity style={styles.navigationButton} onPress={onPressHandler}>
                <Text style={styles.navigationButtonText}>Go to About Page</Text>
            </TouchableOpacity> */}
            {/* Switch Button for units */}
            < View style={styles.switchContainer} >
                <Text style={styles.text}>Unit: {metric ? 'Square Meters' : 'Square Feet'}</Text>
                <Switch style={styles.switchButton} value={metric} onValueChange={toggleMetric} />
            </View >

            {/* Room Dimensions */}
            < Text style={styles.text} > Room Dimensions({metric ? 'sqm' : 'sqft'})</Text >
            <TextInput
                keyboardType='numeric'
                style={styles.textInput}
                placeholder={`e.g. 100 ${metric ? 'sqm' : 'sqft'}`}
                onChangeText={(newText) => setDimension(newText)} />

            {/* Flooring Price */}
            <Text style={styles.text}>Price per unit of flooring</Text>
            <TextInput
                multiline
                keyboardType='numeric'
                style={styles.textInput}
                placeholder='e.g. 15$ per unit'
                onChangeText={(newText) => setFlooringPrice(newText)} />

            {/* Installation Price */}
            <Text style={styles.text}>Installation Price</Text>
            <TextInput
                multiline
                keyboardType='numeric'
                style={styles.textInput}
                placeholder='e.g. 20$ per unit installation'
                onChangeText={(newText) => setInstallation(newText)} />


            {/* Final Result */}
            <View style={styles.finalResult}>
                <Text style={styles.headings}>Final Result</Text>
                <Text style={styles.finalResultText}>Flooring Cost: ${flooringCost.toFixed(2)} </Text>
            </View>


            <View style={styles.finalResult}>
                <Text style={styles.finalResultText}>Installation Cost: ${installationCost.toFixed(2)} </Text>
            </View>


            <View style={styles.finalResult}>
                <Text style={styles.finalResultText}>Total Cost (Before Tax): ${totalCost.toFixed(2)} </Text>
            </View>


            <View style={styles.finalResult}>
                <Text style={styles.finalResultText}>Tax: ${tax.toFixed(2)} </Text>
            </View>


            <View style={styles.finalResult}>
                <Text style={styles.finalResultText}>Total Cost (After Tax): ${totalCostWithTax.toFixed(2)} </Text>
            </View>

            <StatusBar style="auto" />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: 'blue',
        padding: 5,
        margin: 10,
        width: 300,
        borderRadius: 20

    },
    finalResult: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'cyan',
        padding: 50,
        marginTop: 5,
        width: 350,
        borderRadius: 20
    },
    finalResultText: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'serif',
        fontStyle: 'italic'
    },
    headings: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'serif',
        fontStyle: 'italic',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: -10,
        fontWeight: 'bold'
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 65,
        marginBottom: 10
    },
    switchButton: {
        marginLeft: 10
    },
    navigationButton: {
        marginTop: 35,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationButtonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
}



);
