import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

const Button = ({name, color, size}) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Icon name={name} color={color} size={size} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginRight: 5,
    },
})


export default Button
