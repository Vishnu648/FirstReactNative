import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const GoalList = ({ itemData, onDeleteGoal }) => {
    return (
        <View style={styles.listItem} >
            <Pressable android_ripple={{ color: '#D11A2A' }} onLongPress={() => onDeleteGoal(itemData.item.id)}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 30,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#292e49',

    },
    goalText: {
        color: 'white',
        fontSize: 28,
        padding: 10,
        textAlign:'center'
    }
})

export default GoalList